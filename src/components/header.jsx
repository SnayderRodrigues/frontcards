import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "../assets/react.svg";

const Header = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <header className="fixed z-50 w-full bg-neutral-950 border-b border-b-white border-opacity-20 items-center justify-center flex">
      <nav className="wrapper flex items-center justify-between gap-4 py-4">
        <a href="/" className="group flex items-center gap-3">
          <img src={Logo} alt="Logo" className="" width={48} />
          <div className="hidden sm:block text-xl md:text-2xl lg:text-3xl font-bold uppercase group-hover:text-neutral-400 transition-colors">
            Frontend Tools
          </div>
        </a>
        <div className="flex items-center gap-8 sm:text-lg lg:text-xl font-medium">
          <Link
            to="/about"
            className="hidden sm:block hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Button
            text="Submit a Resource"
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
