import React from "react";

const Button = ({ text, href, className, svgClass }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`w-fit flex items-center justify-center gap-1 text-base sm:text-lg font-medium bg-indigo-700 px-4 lg:px-6 py-3 lg:py-4 rounded-lg md:hover:bg-indigo-800 transition-colors cursor-pointer ${
        className || ""
      }`}
    >
      <span className="shrink-0">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 -960 960 960"
        fill="#fff"
        className={`w-[18px] sm:w-5 lg:w-6 mt-[2px] ${svgClass || ""}`}
      >
        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
      </svg>
    </a>
  );
};

export default Button;
