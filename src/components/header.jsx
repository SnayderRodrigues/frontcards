import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-neutral-950 border-b border-b-white border-opacity-20 items-center justify-center flex">
      <nav className="wrapper flex justify-between items-center py-3">
        <a
          href="/"
          className="text-3xl font-bold uppercase hover:text-neutral-400 transition-colors"
        >
          Frontend Tools
        </a>
        <div className="flex items-center gap-8 text-xl">
          <Link
            to="/about"
            className="hover:text-neutral-400 transition-colors"
          >
            About
          </Link>
          <Link
            to=""
            className="bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Submit a Resource
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
