import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../public/logo-1.jpg";
import { AuthContext } from "./providers/AuthProvider";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const links = (
    <>
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
      {/* <li>
        <NavLink
          to="/my-request-post"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          onClick={() => setIsMenuOpen(false)}
        >
          My Volunteer Request Post
        </NavLink>
      </li> */}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="rounded-lg w-32" src={logo1} alt="Logo" />
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <div ref={dropdownRef} className="relative">
            <img
              role="button"
              className="w-10 cursor-pointer"
              src={user?.photoURL || "https://i.ibb.co/vjsFkLj/219983.png"}
              alt="Profile"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <ul className="absolute right-0 border mt-1 w-52 p-2 bg-base-100 rounded-lg shadow z-[1]">
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
              </ul>
            )}
          </div> */}

          <div className="flex gap-4">
            {user?.email ? (
              <div>
                <div ref={dropdownRef} className="relative">
                  <img
                    role="button"
                    className="w-10 cursor-pointer"
                    src={
                      user?.photoURL || "https://i.ibb.co/vjsFkLj/219983.png"
                    }
                    alt="Profile"
                    onClick={toggleDropdown}
                  />
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
                        <button className="p-2 mt-2 w-full border rounded-md text-sm hover:bg-green-700 bg-success text-white">
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <button className="p-2 border rounded-md text-sm hover:bg-green-700 bg-success text-white">
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
