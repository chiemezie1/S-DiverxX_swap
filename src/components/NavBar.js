import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-5 rounded-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 ml-2">
          <Link to="/" className="text-white text-2xl font-bold">
            {/* Replace with your Logo */}
            <img src="path-to-your-logo" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="mx-4 text-lg flex-1 justify-center space-x-8 hidden sm:flex">
          <Link to="/marketplace" className="text-white hover:text-red-500">
            Marketplace
          </Link>
          <Link to="/explore" className="text-white hover:text-red-500">
            Explore
          </Link>
          <Link to="/collection" className="text-white hover:text-red-500">
            Collection
          </Link>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 flex justify-end">
            <Link
              to="/connect-wallet"
              className="bg-blue-500 text-white hover:bg-blue-700 rounded px-4 py-1"
            >
              Connect
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-2 space-y-2 text-lg">
          <Link
            to="/marketplace"
            className="block text-white hover:text-red-500 px-4 py-2"
          >
            Marketplace
          </Link>
          <Link
            to="/explore"
            className="block text-white hover:text-red-500 px-4 py-2"
          >
            Explore
          </Link>
          <Link
            to="/collection"
            className="block text-white hover:text-red-500 px-4 py-2"
          >
            Collection
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
