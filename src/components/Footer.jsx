import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <div>
            Coded by{" "}
            <a
              href="https://snayderrodrigues.vercel.app/"
              target="_blank"
              className="font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              Snayder Rodrigues
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/about"
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
          >
            About
          </Link>
          <Link
            to=""
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
          >
            Submit a Resource
          </Link>
          <Link
            to=""
            className="w-fit text-xl hover:text-neutral-400 transition-colors"
          >
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
