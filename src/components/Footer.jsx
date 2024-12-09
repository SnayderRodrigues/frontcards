import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <footer className="border-t border-t-white border-opacity-20">
      <div className="wrapper relative flex flex-col md:flex-row justify-between gap-12 pt-16 pb-8">
        <div className="flex flex-col gap-4 justify-between">
          <a
            href="/"
            className="text-3xl sm:text-3xl md:text-4xl font-bold uppercase hover:text-neutral-400 transition-colors"
          >
            Frontend Tools
          </a>
          <div className="text-lg lg:text-xl font-medium">
            Coded by{" "}
            <a
              href="https://snayderrodrigues.vercel.app/"
              target="_blank"
              className="font-bold text-neutral-400 hover:text-white transition-colors"
            >
              Snayder Rodrigues
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg lg:text-xl font-medium">
          <Link
            to="/about"
            className="w-fit hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            About
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit hover:text-neutral-400 transition-colors"
          >
            Submit a Resource
          </a>
          <Link
            to="/legal"
            className="w-fit hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            Legal
          </Link>
        </div>
        <a
          href="#hero-section"
          className="w-fit absolute bottom-8 right-0 flex md:hidden items-center gap-1 p-2 border border-neutral-700 rounded-xl"
        >
          Scroll to top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
