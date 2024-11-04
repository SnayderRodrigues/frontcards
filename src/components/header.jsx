import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <header className="fixed z-50 w-full bg-neutral-950 border-b border-b-white border-opacity-20 items-center justify-center flex">
      <nav className="wrapper flex justify-between items-center py-4">
        <a
          href="/"
          className="text-3xl font-bold uppercase hover:text-neutral-400 transition-colors"
        >
          Frontend Tools
        </a>
        <div className="flex items-center gap-8 text-xl font-medium">
          <Link
            to="/about"
            className="hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Button
            text="Submit a Resource"
            href=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
