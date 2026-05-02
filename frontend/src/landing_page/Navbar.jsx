import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-300 px-5 md:px-10 lg:px-48 text-gray-700">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/favicon.svg" className="h-7" alt="TradeSphere Logo" />
          <p className="text-xl font-semibold">Tradesphere</p>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded hover:bg-gray-200 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">

            <li>
              <Link to="/signup" className="block py-2 px-3 hover:text-blue-600">
                Signup
              </Link>
            </li>

            <li>
              <Link to="/about" className="block py-2 px-3 hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link to="/product" className="block py-2 px-3 hover:text-blue-600">
                Product
              </Link>
            </li>

            <li>
              <Link to="/pricing" className="block py-2 px-3 hover:text-blue-600">
                Pricing
              </Link>
            </li>

            <li>
              <Link to="/support" className="block py-2 px-3 hover:text-blue-600">
                Support
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;