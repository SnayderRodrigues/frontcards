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
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-16 xl:gap-32 md:mt-8">
        <div className="w-full md:w-1/2 aspect-square flex items-center justify-center bg-neutral-100 border-[4px] border-neutral-700 rounded-2xl">
          <div className="w-2/3 sm:p-6 md:p-8 xl:p-16">
            <img src={tool.image} alt={tool.title} className="w-full h-full" />
          </div>
        </div>
        <div className="-order-1 md:order-1 md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{tool.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div
              className={`w-fit flex items-center justify-center text-sm font-semibold text-white px-4 py-2 rounded-full ${
                tool.category === "Desenvolvimento" ? "bg-indigo-700" : ""
              } ${tool.category === "Design" ? "bg-purple-600" : ""} ${
                tool.category === "Aprendizado" ? "bg-emerald-600" : ""
              } ${tool.category === "Criadores" ? "bg-rose-600" : ""} ${
                tool.category === "Ferramentas" ? "bg-casper-700" : ""
              }`}
            >
              <span className="mb-[2px]">{tool.category}</span>
            </div>
            <span className="shrink-0 flex flex-wrap gap-2 w-fit text-sm font-semibold">
              {tool.tags.map((tag, index) => (
                <span key={index} className="shrink-0">
                  #{tag}
                </span>
              ))}
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200 mb-4">
            {tool.description}
          </p>
          <div className="flex gap-4">
            <Link
              onClick={() => navigate(-1)}
              className="group flex items-center justify-center gap-1 text-base sm:text-lg lg:text-xl font-medium text-white bg-neutral-950 px-5 py-2 border border-neutral-700 rounded-lg transition-colors hover:text-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 -960 960 960"
                fill="#fff"
                className="w-3 md:w-4 ml-[-4px] group-hover:fill-neutral-400 transition-colors"
              >
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
              <span className="mb-[2px]">Voltar</span>
            </Link>
            <Button text="Explorar" href={tool.source} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
