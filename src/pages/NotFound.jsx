import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#0b0d1c] flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-bold text-purple-500">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4">
          Sorry, the page you’re looking for doesn’t  exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;