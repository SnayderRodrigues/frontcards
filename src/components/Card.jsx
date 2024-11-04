import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ tool }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resources/${tool.slug}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className="bg-neutral-950 border-4 rounded-xl border-neutral-600 border-opacity-15 overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square flex items-center justify-center bg-neutral-800 rounded-b-xl">
        <img src={tool.image} alt={tool.title} className="w-2/3 p-16" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <span className="text-2xl font-bold">{tool.title}</span>
        <span className="w-fit text-sm font-semibold text-neutral-900 bg-neutral-200 px-4 py-2 rounded-full">
          {tool.category}
        </span>
      </div>
    </div>
  );
};

export default Card;
