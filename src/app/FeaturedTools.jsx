import React, { useState } from "react";
import { Link } from "react-router-dom";
import toolsData from "../data/toolsData";
import Filter from "../components/Filter";
import ToolCard from "../components/ToolCard";

const FeaturedTools = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentTools = toolsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(toolsData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  return (
    <section className="wrapper">
      <Filter />
      <div className="grid grid-cols-4 gap-8 mb-16">
        {currentTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="flex justify-center gap-8 text-2xl mb-16">
        <Link
          className={`transition-colors ${
            currentPage === 1
              ? "text-neutral-600 cursor-default"
              : "text-white hover:text-neutral-400"
          }`}
          onClick={handlePrevPage}
        >
          &lt;Previous
        </Link>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Link
          className={`transition-colors ${
            currentPage === totalPages
              ? "text-neutral-600 cursor-default"
              : "text-white hover:text-neutral-400"
          }`}
          onClick={handleNextPage}
        >
          Next&gt;
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTools;
