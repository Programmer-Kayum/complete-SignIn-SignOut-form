import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;