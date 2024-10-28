import React from "react";
import { Link } from "react-router-dom";
import ToolImage from "../assets/react.svg";

const HomePage = () => {
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
    <>
      <main>
        <section className="flex justify-center items-center">
          <div className="wrapper flex flex-col justify-center items-center text-center pt-48 pb-32">
            <h1 className="flex items-center justify-center  max-w-[18ch] leading-tight mb-16">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p className="text-2xl max-w-[56ch]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, eaque. Voluptatem voluptas quaerat, similique
              repellendus.
            </p>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <div className="flex items-center justify-center gap-2 mb-8">
              <button className="text-xl text-black bg-white px-4 py-2 rounded-xl">
                All
              </button>
              <ul className="flex items-center text-xl border border-neutral-700 rounded-xl">
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">
                    Category 1
                  </a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">
                    Category 2
                  </a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">
                    Category 3{" "}
                  </a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">
                    Category 4
                  </a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">
                    Category 5
                  </a>
                </li>
              </ul>
            </div>
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
              <Link>{"<"}Previous</Link>
              <span>1 of 1</span>
              <Link>Next{">"}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
