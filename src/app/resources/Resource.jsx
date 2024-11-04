import React from "react";
import { useParams } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";

const Resource = () => {
  const { slug } = useParams();

  const tool = resourcesData.find((tool) => tool.slug === slug);

  return (
    <div className="wrapper pt-48 pb-32">
      <div className="grid grid-cols-2 mt-8">
        <img src={tool.image} alt={tool.title} className="w-1/2 mb-8" />
        <h1 className="text-4xl font-bold mb-4">{tool.title}</h1>
        <p className="text-lg text-neutral-700 mb-4">{tool.description}</p>
        <span className="text-xl font-semibold text-neutral-900 bg-neutral-200 px-4 py-2 rounded-full">
          {tool.category}
        </span>
      </div>
    </div>
  );
};

export default Resource;
