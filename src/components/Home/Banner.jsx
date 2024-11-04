import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative mt-5 bg-cover bg-center h-80 md:h-96 flex items-center justify-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative text-center text-white p-4 max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover amazing content, latest updates, and resources curated just
          for you.
        </p>
        <Link to={"/courses"}>
          <button className="mt-6 px-6 py-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
