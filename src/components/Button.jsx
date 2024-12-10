import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-fit flex items-center gap-1 text-base sm:text-lg lg:text-xl font-medium bg-indigo-700 px-4 py-3 md:px-6 md:py-4 rounded-lg hover:bg-indigo-800 transition-colors cursor-pointer"
    >
      <span className="shrink-0 mb-[2px]">{text}</span>
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
  );
};

export default Button;
