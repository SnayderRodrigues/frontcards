import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "/public/logo-test.svg";

const Header = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <header className="fixed z-50 w-full flex items-center justify-center bg-neutral-950 border-b-2 border-b-neutral-800">
      <nav className="wrapper flex items-center justify-between gap-4 py-4">
        <a href="/" className="group flex items-center gap-2 xsm:gap-3">
          <img src={Logo} alt="Logo" width={40} className="w-8 xsm:w-10" />
          <div className="text-2xl xsm:text-3xl lg:text-4xl font-bold">
            Weblioteca
          </div>
        </a>
        <div className="flex items-center gap-2 lg:gap-4 sm:text-lg lg:text-xl font-medium">
          <Link
            to="/"
            className="hidden md:block px-3 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <Link
            to="/about"
            className="hidden md:block px-3 py-2 mr-3 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Sobre
          </Link>
          <Button text="Indique" href="https://forms.gle/Rh2qCEwa7H3DAUQ26" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
