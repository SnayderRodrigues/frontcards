import React from "react";
import { Link } from "react-router-dom";
import ToolImage from "../assets/vite.svg";
import Filter from "../components/Filter";

const FeaturedToolsPage2 = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  const FeaturedTool = ({ image, category, title }) => (
    <div className="bg-neutral-950 border-4 rounded-xl border-neutral-600 border-opacity-15 overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in cursor-pointer">
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
      category: "Category",
      title: "Tool 9",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 10",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 11",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 12",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 13",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 14",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 15",
    },
    {
      image: ToolImage,
      category: "Category",
      title: "Tool 16",
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
        <Link to="/" className="hover:text-neutral-400" onClick={scrollToTop}>
          &lt;Previous
        </Link>
        <span>2 of 2</span>
        <Link className="text-neutral-600 cursor-default">Next&gt;</Link>
      </div>
    </section>
  );
};

export default FeaturedToolsPage2;
