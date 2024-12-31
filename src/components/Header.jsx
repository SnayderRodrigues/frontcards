import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "/public/logotest.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuAction = () => {
    setOpenMenu(!openMenu);
    window.scrollTo({ top: 0 });
  };

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <header className="fixed z-50 w-full flex items-center justify-center bg-neutral-950 border-b-2 border-b-neutral-800">
      <nav className="wrapper flex items-center justify-between gap-4 py-4">
        <a
          href="/"
          className="relative z-50 flex items-center gap-2 xsm:gap-3"
        >
          <img src={Logo} alt="Logo" width={40} className="w-[36px] xsm:w-10" />
          <div className="text-[28px] xsm:text-3xl lg:text-4xl font-bold">
            Frontcards
          </div>
        </a>
        <div className="hidden md:flex items-center gap-2 lg:gap-4 sm:text-lg lg:text-xl font-medium">
          <Link
            to="/"
            className="p-2 lg:px-3 lg:py-2 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <Link
            to="/favorites"
            className="p-2 lg:px-3 lg:py-2 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Favoritos
          </Link>
          <Link
            to="/about"
            className="p-2 lg:px-3 lg:py-2 mr-2 lg:mr-3 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Sobre
          </Link>
          <Button
            text="Indique um Card"
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
          />
        </div>
        <button
          className="aspect-square w-12 relative z-50 md:hidden flex flex-col items-center justify-center gap-[6px] bg-neutral-900 p-[10px] border-2 border-neutral-800 rounded-lg"
          onClick={handleOpenMenu}
        >
          <div
            className={`w-full h-[2px] bg-white ${
              openMenu == false ? "" : "rotate-45 translate-y-2"
            } transition-transform duration-300`}
          ></div>
          <div
            className={`w-full h-[2px] bg-white ${
              openMenu == false ? "" : "opacity-0"
            } transition-opacity duration-300`}
          ></div>
          <div
            className={`w-full h-[2px] bg-white ${
              openMenu == false ? "" : "-rotate-45 -translate-y-2"
            } transition-transform duration-300`}
          ></div>
        </button>
        <div
          className={`w-full h-full fixed z-40 top-0 left-0 md:hidden flex flex-col gap-6 bg-neutral-950 px-6 sm:px-8 pt-32 pb-8 transition-opacity duration-300 ${
            openMenu ? "" : "opacity-0 select-none pointer-events-none"
          }`}
        >
          <Link
            to="/"
            className="w-fit text-lg font-medium"
            onClick={handleMenuAction}
          >
            Início
          </Link>
          <Link
            to="/favorites"
            className="w-fit text-lg font-medium"
            onClick={handleMenuAction}
          >
            Favoritos
          </Link>
          <Link
            to="/about"
            className="w-fit text-lg font-medium"
            onClick={handleMenuAction}
          >
            Sobre
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-full md:hidden flex items-center justify-center gap-2 text-lg font-medium bg-indigo-700 px-5 py-4 rounded-lg mt-4"
          >
            <span className="shrink-0 xsm:mb-[2px]">Indique um Card</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
