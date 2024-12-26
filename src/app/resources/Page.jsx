import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import Filter from "../../components/Filter.jsx";
import Card from "../../components/Card.jsx";

const FeaturedTools = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "Todas"
  );

  const itemsPerPage = 12;

  const filteredTools = resourcesData.filter((tool) =>
    selectedCategory === "Todas"
      ? true
      : tool.category.includes(selectedCategory)
  );
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTools = filteredTools.slice(startIndex, endIndex);

  useEffect(() => {
    const params = {};
    if (selectedCategory !== "Todas") params.category = selectedCategory;
    if (currentPage > 1) params.page = currentPage;
    setSearchParams(params);
  }, [selectedCategory, currentPage, setSearchParams]);

  const categoryTitles = {
    Todas: "Todas as Ferramentas",
    Frontend: "Ferramentas para Frontend",
    Design: "Ferramentas de Design",
    Aprendizado: "Recursos de Aprendizado",
    Criadores: "Criadores de Conteúdo",
  };

  return (
    <section className="wrapper">
      <div className="flex md:hidden items-center gap-2 mb-6">
        <h2
          className={`shrink-0 w-fit text-lg xsm:text-xl font-semibold ${
            selectedCategory === "Todas"
              ? "bg-neutral-900 border-neutral-800"
              : ""
          } ${
            selectedCategory === "Frontend"
              ? "bg-indigo-700 border-indigo-700"
              : ""
          } ${
            selectedCategory === "Design"
              ? "bg-purple-600 border-purple-600"
              : ""
          } ${
            selectedCategory === "Aprendizado"
              ? "bg-emerald-600 border-emerald-600"
              : ""
          } ${
            selectedCategory === "Criadores"
              ? "bg-rose-600 border-rose-600"
              : ""
          } px-4 py-3 border-2 rounded-xl`}
        >
          {categoryTitles[selectedCategory]}
        </h2>
        <div className="w-full h-[2px] bg-neutral-800"></div>
      </div>
      <Filter
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6 mb-6 md:mb-6">
        {currentTools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="flex items-center gap-4 mb-12 md:mb-16">
        <div className="w-fit hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl overflow-hidden">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0 });
              }}
              className={`w-[32px] lg:w-[36px] xl:w-[44px] aspect-square flex items-center justify-center rounded-lg transition-colors ${
                currentPage === index + 1
                  ? "bg-neutral-100 text-black"
                  : "hover:bg-neutral-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center text-base lg:text-lg font-semibold bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl cursor-default">
          <span className="px-2 lg:px-3 xl:px-4 py-1 xl:py-2">
            {startIndex + 1}-
            {currentPage == totalPages
              ? filteredTools.length
              : itemsPerPage * currentPage}{" "}
            <span className="text-neutral-400">de</span> {filteredTools.length}
          </span>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            className="bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 0 });
              }
            }}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className={`${currentPage === 1 ? "fill-neutral-800" : ""}`}
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
          <button
            className="bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl"
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
                window.scrollTo({ top: 0 });
              }
            }}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className={`${
                currentPage === totalPages ? "fill-neutral-800" : ""
              }`}
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
