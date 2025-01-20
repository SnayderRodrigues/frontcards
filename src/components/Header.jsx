import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "/logo.svg";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && openMenu) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu]);

  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      html.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <header className="fixed z-50 w-full flex items-center justify-center bg-neutral-950 border-b border-b-neutral-900">
      <nav className="wrapper overfl flex items-center justify-between gap-4 py-4">
        <a href="/" className="relative z-50 flex items-center gap-2 xsm:gap-3">
          <img
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="w-[36px] xsm:w-10"
          />
          <div className="text-[28px] xsm:text-3xl lg:text-4xl font-bold">
            Frontcards
          </div>
        </a>
        <div className="hidden md:flex items-center gap-2 lg:gap-4 sm:text-lg font-medium">
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
          className="aspect-square w-12 relative z-50 md:hidden flex flex-col items-center justify-center gap-[6px] bg-neutral-800 p-3 rounded-lg"
          onClick={handleOpenMenu}
          aria-label="Menu"
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
          className={`w-full h-full fixed z-40 top-0 left-0 md:hidden flex flex-col gap-6 bg-neutral-950 px-[20px] sm:px-8 pt-32 pb-6 sm:pb-8 transition-opacity duration-300 ${
            openMenu ? "" : "opacity-0 select-none pointer-events-none"
          }`}
        >
          <Link
            to="/"
            className="w-fit flex items-center gap-2 text-lg font-medium"
            onClick={handleMenuAction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
            </svg>
            <span>Início</span>
          </Link>
          <Link
            to="/favorites"
            className="w-fit flex items-center gap-2 text-lg font-medium"
            onClick={handleMenuAction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
            <span>Favoritos</span>
          </Link>
          <Link
            to="/about"
            className="w-fit flex items-center gap-2 text-lg font-medium"
            onClick={handleMenuAction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Z" />
            </svg>
            <span>Sobre</span>
          </Link>
          <Link
            to="/legal"
            className="w-fit flex items-center gap-2 text-lg font-medium"
            onClick={handleMenuAction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z" />
            </svg>
            <span>Termos Legais</span>
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-full md:hidden flex items-center justify-center gap-2 text-lg font-medium bg-indigo-700 px-5 py-4 rounded-lg mt-4"
          >
            <span className="shrink-0">Indique um Card</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className="w-5 mt-[2px]"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </a>
          <div className="flex-1 flex flex-col justify-end gap-3 text-sm">
            <div className="text-neutral-400">
              Projetado e desenvolvido por:
            </div>
            <a
              target="_blank"
              href="https://snayderrodrigues.vercel.app/"
              className="w-full flex items-center justify-between gap-1 bg-neutral-800 px-3 py-3 rounded-lg"
            >
              <span className="mb-[3px]">Snayder Rodrigues</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
