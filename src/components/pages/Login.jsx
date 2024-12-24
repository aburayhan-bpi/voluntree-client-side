import { useState } from "react";
import logo1 from "../../../public/logo-1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { LoaderIcon } from "react-hot-toast";
import Swal from "sweetalert2";
const Login = () => {
  document.title = "Login | Voluntree";
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const { loginUser, googleLogin } = useAuth();
  const [showPass, setShowPass] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const form = new FormData(formElement);
    const email = form.get("email");
    const password = form.get("password");
    const loginUserData = { email, password };
    console.log(loginUserData);
    setErrorMsg("");

    if (email === "" || password === "") {
      return setErrorMsg("Please fillup all fields");
    }

    // login user with email and password
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          text: "Logged in successfully!",
          icon: "success",
        });
        setErrorMsg("");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setErrorMsg("Please provide valid credentials");
      });
  };

  // login with Google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        // if (acknowledged) {
          Swal.fire({
            text: "Logged in successfully!",
            icon: "success",
          });
          setErrorMsg("");
          navigate(location.state ? location.state : "/");
        // }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div>
            <img src={logo1} alt="" />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In to your account
            </h1>
            <form
              onSubmit={handleLogin}
              className="space-y-4 md:space-y-6"
              action="#"
            >
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
                  placeholder="name@company.com"
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
                <div className="flex justify-between mt-2">
                  <div>
                    {errorMsg && (
                      <p className="text-xs text-red-500">{errorMsg}</p>
                    )}
                  </div>
                  <a className=" text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-success hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center space-x-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <FcGoogle className="text-xl" />

              <span className="text-sm font-medium text-gray-600">
                Continue with Google
              </span>
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
