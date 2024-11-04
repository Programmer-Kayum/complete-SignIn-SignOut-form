import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const password2 = target.password2.value;

    if (password !== password2) {
      toast.error("Passwords do not match!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setTimeout(() => {
          navigate("/signIn"); // Use navigate to redirect
        }, 1000); // Optional delay for feedback
        toast.success("Registration successful! Redirecting to login...");
      })
      .catch((error) => {
        const errorM = error.message;
        console.log(errorM);
        toast.error(`Error: ${error.message}`);
      });

    e.target.reset();
  };

  // --------------------------

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12m2.25 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm3.75 2a8.974 8.974 0 01-15 0m15 0a8.974 8.974 0 00-15 0"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.98 8.606A9.035 9.035 0 0112 5c3.147 0 5.97 1.692 7.52 4.606m-15.04 0A9.035 9.035 0 0112 19c3.147 0 5.97-1.692 7.52-4.606M3.98 8.606l16.04 10.606m0-10.606L3.98 19"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirm-password"
              name="password2"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {confirmPasswordVisible ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12m2.25 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm3.75 2a8.974 8.974 0 01-15 0m15 0a8.974 8.974 0 00-15 0"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.98 8.606A9.035 9.035 0 0112 5c3.147 0 5.97 1.692 7.52 4.606m-15.04 0A9.035 9.035 0 0112 19c3.147 0 5.97-1.692 7.52-4.606M3.98 8.606l16.04 10.606m0-10.606L3.98 19"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Have you a account? Please{" "}
            <Link to="/signIn" className="text-blue-500 hover:underline">
              Sign In
            </Link>
            .
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
