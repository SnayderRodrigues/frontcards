import React from "react";
import { useState } from "react";

const Filter = ({
  totalPages,
  currentPage,
  setCurrentPage,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    "Development",
    "Design",
    "Learning",
    "Creators",
    "Tools",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="relative flex flex-wrap items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
      <ul className="hidden md:flex items-center gap-2 text-base lg:text-lg xl:text-xl p-2 border border-neutral-700 rounded-xl">
        {categories.map((category) => (
          <li
            key={category}
            className={`flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-1 xl:px-5 xl:py-2 rounded-lg cursor-pointer transition-colors ${
              selectedCategory === category
                ? "bg-neutral-100 text-black"
                : "hover:bg-neutral-800"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <button
        className="flex-1 md:hidden flex items-center gap-2 p-2 border border-neutral-700 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 flex bg-neutral-100 text-black px-2 py-1 rounded-lg cursor-pointer transition-colors">
          {selectedCategory}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 -960 960 960"
          fill="#fff"
        >
          <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
        </svg>
      </button>
      <ul
        className={`w-full absolute bottom-[58px] z-10 flex flex-col md:hidden gap-2 text-base lg:text-lg xl:text-xl bg-neutral-950 p-2 border border-neutral-700 rounded-xl ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {categories.map((category) => (
          <li
            key={category}
            className={`flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-1 xl:px-5 xl:py-2 rounded-lg cursor-pointer transition-colors ${
              selectedCategory === category
                ? "bg-neutral-100 text-black"
                : "hover:bg-neutral-800"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="shrink-0 flex items-center gap-2 p-2 border border-neutral-700 rounded-xl overflow-hidden">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[32px] lg:w-[36px] xl:w-[44px] aspect-square flex items-center justify-center text-base lg:text-lg xl:text-xl font-semibold rounded-lg transition-colors ${
              currentPage === index + 1
                ? "bg-neutral-100 text-black"
                : "hover:bg-neutral-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
