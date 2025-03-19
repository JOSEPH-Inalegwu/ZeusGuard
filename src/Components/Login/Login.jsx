import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstFocus, setFirstFocus] = useState({ email: true, password: true }); // Track first focus
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const correctEmail = "josephjonahinalegwu@gmail.com";
    const correctPassword = "JOSE00";

    if (email !== correctEmail && password !== correctPassword) {
      setEmailError(true);
      setPasswordError(true);
    } else if (email !== correctEmail) {
      setEmailError(true);
      setPasswordError(false);
    } else if (password !== correctPassword) {
      setEmailError(false);
      setPasswordError(true);
    } else {
      setEmailError(false);
      setPasswordError(false);
      console.log("Login successful!");
      navigate("/app");
    }
  };

  return (
    <div className="flex w-full mt-8 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2 bg-[url('/src/Images/crypto.jpg')] opacity-75"></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-24 h-24 p-1 border border-green-500 bg-gradient-to-l from-green-500 to-blue-500 rounded-full"
            src="/logo-removebg-preview.png"
            alt=""
          />
        </div>
        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFirstFocus((prev) => ({ ...prev, email: false }))}
              required
              className={`block w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none transition duration-150 ease-in-out
                ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : firstFocus.email
                    ? "border-gray-600 focus:ring-green-400 focus:ring-opacity-50 focus:ring-offset-1 focus:ring-offset-blue-400"
                    : "border-gray-600 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-green-400"
                }`}
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFirstFocus((prev) => ({ ...prev, password: false }))}
              required
              className={`block w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none transition duration-150 ease-in-out
                ${
                  passwordError
                    ? "border-red-500 focus:ring-red-500"
                    : firstFocus.password
                    ? "border-gray-600 focus:ring-green-400 focus:ring-opacity-50 focus:ring-offset-1 focus:ring-offset-blue-400"
                    : "border-gray-600 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-green-400"
                }`}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-orange-400 rounded-lg cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-white font-semibold hover:underline cursor-pointer">
            Forget Password?
          </p>

          <p className="text-sm text-blue-500 hover:underline cursor-pointer">Don't have an account?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
