import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../public/logo-1.jpg";
import { AuthContext } from "./providers/AuthProvider";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";
import { ThemeContext } from "./providers/ThemeProvider";

const Navbar = () => {
  // const { user } = useContext(AuthContext);
  const { user, signOutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling to document
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/");
    });
  };

  const links = (
    <>
      <div className="md:flex items-center gap-6">
        <li>
          <NavLink
            to="/"
            className="block mb-2 md:mb-0 py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-volunteers"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            All Volunteers Need Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
        </li>
        {!user && (
          <li className="md:hidden mt-2 md:mt-0">
            <div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 mr-2 border rounded-md text-sm hover:bg-green-700 bg-success text-white"
              >
                <Link to="/login">Login</Link>
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 border rounded-md text-sm hover:bg-green-700 bg-success text-white"
              >
                <Link to="/register">Register</Link>
              </button>
            </div>
          </li>
        )}
      </div>
    </>
  );
  // max-w-screen-xl
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-10 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="rounded-lg w-32" src="./mainLogo.png" alt="Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* theme start */}
          <button className="dark:text-white mr-3" onClick={toggleTheme}>
            {theme === "light" ? (
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </button>
          {/* theme end */}

          <div className="flex gap-4">
            {user?.email ? (
              <div>
                <div ref={dropdownRef} className="relative">
                  {user?.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://i.ibb.co/wScRM3D/219983.png"
                      }
                      alt="User"
                      onClick={toggleDropdown}
                    />
                  ) : (
                    <span className="w-11 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <Loader />
                    </span>
                  )}
                  {isDropdownOpen && (
                    <ul className="absolute right-0 border mt-1 w-52 p-2 bg-base-100 rounded-lg shadow z-[1]">
                      <li>
                        <p className="mb-1 font-semibold">
                          {user?.email ? user?.displayName : "N/A"}
                        </p>
                      </li>
                      <li className="mb-1">
                        {" "}
                        <Link
                          to="/add-volunteer"
                          className="text-xs border p-2 block rounded hover:bg-gray-100"
                          onClick={closeDropdown}
                        >
                          Add Volunteer Need Post
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/manage-posts"
                          className="text-xs border p-2 block rounded hover:bg-gray-100"
                          onClick={closeDropdown}
                        >
                          Manage My Posts
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="p-2 mt-2 w-full border rounded-md text-sm hover:bg-green-700 bg-success text-white"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex">
                <button className="p-2 mr-1 border rounded-md text-sm hover:bg-green-700 bg-success text-white">
                  <Link to="/login">Login</Link>
                </button>

                <button className="p-2 border rounded-md text-sm hover:bg-green-700 bg-success text-white">
                  <Link to="/register">Register</Link>
                </button>
              </div>
            )}
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
