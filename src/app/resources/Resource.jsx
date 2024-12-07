import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import Button from "../../components/Button.jsx";

const Resource = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const tool = resourcesData.find((tool) => tool.slug === slug);

  return (
    <div className="wrapper pt-32 pb-32">
      <div className="flex items-center gap-32 mt-8">
        <div className="w-1/2 aspect-square flex items-center justify-center bg-neutral-100 border-[4px] border-neutral-700 rounded-2xl">
          <div className="w-2/3 p-16">
            <img src={tool.image} alt={tool.title} className="w-full h-full" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{tool.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-fit text-sm font-semibold text-neutral-900 bg-neutral-100 px-4 py-2 rounded-full">
              {tool.category}
            </span>
            <span className="flex gap-2 w-fit text-sm font-semibold">
              {tool.tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </span>
          </div>
          <p className="text-2xl text-neutral-400 mb-4">{tool.description}</p>
          <div className="flex gap-4">
            <Link
              onClick={() => navigate(-1)}
              className="group flex items-center justify-center gap-1 text-xl font-medium text-white bg-neutral-950 px-5 py-2 border border-neutral-700 rounded-lg transition-colors hover:text-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 -960 960 960"
                fill="#fff"
                className="ml-[-4px] group-hover:fill-neutral-400 transition-colors"
              >
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
              <span className="mb-[2px]">Back</span>
            </Link>
            <Button text="View Resource" href={tool.source} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
