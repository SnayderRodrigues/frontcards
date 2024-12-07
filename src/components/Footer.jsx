import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <footer className="border-t border-t-white border-opacity-20">
      <div className="wrapper flex justify-between pt-16 pb-8">
        <div className="flex flex-col justify-between">
          <a
            href="/"
            className="text-4xl font-bold uppercase hover:text-neutral-400 transition-colors"
          >
            Frontend Tools
          </a>
          <div className="text-xl font-medium">
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
        <div className="flex flex-col gap-4 font-medium">
          <Link
            to="/about"
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            About
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
          >
            Submit a Resource
          </a>
          <Link
            to="/legal"
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
