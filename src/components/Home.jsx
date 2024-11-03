import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

const Home = () => {
  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);

  return (
    <div>
      {/* <p>{authInfo.name}</p> */}

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website!
          </h1>
          <p className="text-gray-600 mb-6">
            Discover amazing content and join our community. Please sign in or
            create an account to get started.
          </p>

          <div className="flex space-x-4">
            <Link
              to="/signIn"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sign In
            </Link>
            <Link
              to="/reg"
              className="w-full bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
