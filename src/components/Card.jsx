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
      className="w-full relative bg-neutral-900 border-4 border-neutral-800 rounded-xl overflow-hidden transition-colors ease-in cursor-pointer hover:border-neutral-600 after:content-['More_Info'] after:block after:absolute after:top-2 after:right-2 after:z-10 after:text-sm after:bg-blue-700 after:p-2 after:rounded-lg after:opacity-0 after:transition-opacity hover:after:opacity-100"
      onClick={handleClick}
    >
      <div className="aspect-square flex items-center justify-center bg-[#f7f7f7] rounded-b-xl">
        <img src={tool.image} alt={tool.title} className="w-2/3 p-16" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <span className="text-2xl font-bold">{tool.title}</span>
        <span className="text-neutral-400">#{tool.tags}</span>
        <span className="w-fit text-sm font-semibold text-white bg-neutral-700 px-4 py-2 rounded-full">
          {tool.category}
        </span>
      </div>
    </div>
  );
};

export default Card;
