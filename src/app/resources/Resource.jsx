import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";

const Resource = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const tool = resourcesData.find((tool) => tool.slug === slug);

  return (
    <div className="wrapper pt-32 pb-32">
      <Link
        onClick={() => navigate(-1)}
        className="text-xl font-semibold text-white hover:text-neutral-400 transition-colors px-5 py-2 border border-neutral-700 rounded-xl"
      >
        &lt;Back
      </Link>
      <div className="grid grid-cols-2 items-center gap-32 mt-8">
        <img
          src={tool.image}
          alt={tool.title}
          className="w-full max-h-96 border-[4px] border-neutral-700 rounded-2xl"
        />
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{tool.title}</h1>
            <p className="text-2xl text-neutral-400 mb-4">{tool.description}</p>
            <span className="w-fit text-xl font-semibold text-neutral-900 bg-neutral-200 px-4 py-2 rounded-full">
              {tool.category}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Resource;
