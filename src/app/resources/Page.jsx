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
    selectedCategory === "Todas" ? true : tool.category.includes(selectedCategory)
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

  return (
    <section className="wrapper">
      <Filter
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6 mb-6 md:mb-10 lg:mb-12 xl:mb-16">
        {currentTools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="w-fit hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold  p-2 border border-neutral-700 rounded-xl mb-16 overflow-hidden">
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
    </section>
  );
};

export default FeaturedTools;
