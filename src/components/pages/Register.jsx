import React, { useState } from "react";
import logo1 from "../../../public/logo-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Register = () => {
  document.title = "Register | Voluntree";
  const { createUser, updateUserProfile } = useAuth();
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  // register
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    setErrorMsg("");

    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidationRegex.test(password)) {
      setErrorMsg(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter."
      );
      return;
    }
    const newUser = { name, email, photo, password };
    console.log(newUser);

    // create new user
    createUser(email, password)
      .then(async (result) => {
        const user = result.user;
        console.log(user);

        // Update user profile
        await updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        });

        // Reload the user to ensure the updated profile data is available
        await user.reload();

        Swal.fire({
          text: "Account created!",
          icon: "success",
        });
        setErrorMsg("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-4 mt-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
        <div className="w-full bg-white rounded-lg overflow-hidden shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 h-fit">
          <div>
            <img src={logo1} alt="" />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up to your account
            </h1>
            <form
              onSubmit={handleRegister}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email"
                  required=""
                />
              </div>
              <div>
                <label
                  for="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  id="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Photo URL"
                  required=""
                />
              </div>
              <div className="relative">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-[2.3rem] bg-gray-300 rounded-md p-1 cursor-pointer"
                >
                  {showPass ? (
                    <IoIosEye className="size-5" />
                  ) : (
                    <IoIosEyeOff className="size-5" />
                  )}
                </div>
              </div>
              {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
              <button
                type="submit"
                className="w-full bg-success hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
