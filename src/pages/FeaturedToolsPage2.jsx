import React from "react";
import { Link } from "react-router-dom";
import ToolImage from "../assets/react.svg";
import Filter from "../components/Filter";

const FeaturedToolsPage2 = () => {
  const FeaturedTool = ({ image, category, title }) => (
    <div className="bg-neutral-900 border-4 rounded-xl border-neutral-600 border-opacity-15 overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in cursor-pointer">
      <div className="flex items-center justify-center bg-neutral-800 rounded-b-xl">
        <img src={image} className="w-2/3 p-16" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <span className="text-2xl font-bold">{title}</span>
        <span className="w-fit text-sm font-semibold text-black bg-white px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );

  const featuredTools = [
    {
      image: ToolImage,
      category: "Category 1",
      title: "Tool 1",
    },
    {
      image: ToolImage,
      category: "Category 2",
      title: "Tool 2",
    },
    {
      image: ToolImage,
      category: "Category 3",
      title: "Tool 3",
    },
    {
      image: ToolImage,
      category: "Category 4",
      title: "Tool 4",
    },
    {
      image: ToolImage,
      category: "Category 5",
      title: "Tool 5",
    },
    {
      image: ToolImage,
      category: "Category 6",
      title: "Tool 6",
    },
    {
      image: ToolImage,
      category: "Category 7",
      title: "Tool 7",
    },
    {
      image: ToolImage,
      category: "Category 8",
      title: "Tool 8",
    },
  ];

  return (
    <section className="wrapper">
      <Filter />
      <div className="grid grid-cols-4 gap-8 mb-16">
        {featuredTools.map((post, index) => (
          <FeaturedTool
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
          />
        ))}
      </div>
      <div className="flex justify-center gap-8 text-2xl mb-16">
        <Link to="/">{"<"}Previous</Link>
        <span>2 of 2</span>
        <Link>Next{">"}</Link>
      </div>
    </section>
  );
};

export default FeaturedToolsPage2;
