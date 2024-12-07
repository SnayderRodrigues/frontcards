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
      className="group w-full relative bg-neutral-900 border-4 border-neutral-800 rounded-xl overflow-hidden transition-colors ease-in cursor-pointer hover:border-neutral-600"
      onClick={handleClick}
    >
      <div className="aspect-square flex items-center justify-center bg-neutral-100 rounded-b-xl">
        <img src={tool.image} alt={tool.title} className="w-2/3 p-6" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <span className="text-2xl font-bold">{tool.title}</span>
        <span className="flex flex-wrap gap-2 text-neutral-400">
          {tool.tags.map((tag, index) => (
            <span key={index} className="shrink-0">
              #{tag}
            </span>
          ))}
        </span>
        <div className="w-fit flex items-center justify-center text-sm font-semibold text-white bg-slate-600 px-4 py-2 rounded-full">
          <span className="mb-[2px]">{tool.category}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 absolute top-2 right-2 z-10 text-sm bg-blue-700 px-3 py-2 rounded-lg opacity-0 transition-opacity group-hover:opacity-100">
        <span className="mb-[2px]">More Info</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          viewBox="0 -960 960 960"
          fill="#fff"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
