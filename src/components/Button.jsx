import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-fit text-xl font-medium bg-blue-700 px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;
