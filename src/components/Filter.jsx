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
  const [isPaginationOpen, setIsPaginationOpen] = useState(false);

  const handleCategoryIsOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsPaginationOpen(false);
  };

  const handleIsPaginationOpen = () => {
    setIsPaginationOpen(!isPaginationOpen);
    if (!isPaginationOpen) setIsOpen(false);
  };

  const categories = [
    "Todas",
    "Frontend",
    "Design",
    "Aprendizado",
    "Criadores",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ul className="hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold p-2 border border-neutral-700 rounded-xl">
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 px-2 lg:px-3 xl:px-4 py-1 xl:py-2 rounded-lg cursor-pointer transition-colors ${
                selectedCategory === category ? "" : "hover:bg-neutral-800"
              } ${
                selectedCategory === category && category === "Todas"
                  ? "bg-neutral-100 text-black"
                  : ""
              } ${
                selectedCategory === category && category === "Frontend"
                  ? "bg-indigo-700"
                  : ""
              } ${
                selectedCategory === category && category === "Design"
                  ? "bg-purple-600"
                  : ""
              } ${
                selectedCategory === category && category === "Aprendizado"
                  ? "bg-emerald-600"
                  : ""
              } ${
                selectedCategory === category && category === "Criadores"
                  ? "bg-rose-600"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="shrink-0 hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold p-2 border border-neutral-700 rounded-xl overflow-hidden">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-[32px] lg:w-[36px] xl:w-[44px] aspect-square flex items-center justify-center rounded-lg transition-colors  ${
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
      <div>
        <button
          className="flex-1 md:hidden flex items-center gap-2 bg-neutral-950 p-2 border border-neutral-700 rounded-xl"
          onClick={handleCategoryIsOpen}
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
          className={`absolute left-0 bottom-[58px] z-10 flex flex-col md:hidden gap-2 text-base lg:text-lg xl:text-xl bg-neutral-950 p-2 border border-neutral-700 rounded-xl mx-5 sm:mx-8 transition-opacity ${
            isOpen ? "" : "opacity-0 select-none pointer-events-none"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 px-2 py-1 rounded-lg cursor-pointer transition-colors ${
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
          className="md:hidden flex items-center gap-2 bg-neutral-950 p-2 border border-neutral-700 rounded-xl"
          onClick={handleIsPaginationOpen}
        >
          <span className="flex-1 flex bg-neutral-100 text-black px-3 py-1 rounded-lg cursor-pointer transition-colors">
            {currentPage}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
          </svg>
        </button>
        <div
          className={`shrink-0 absolute right-0 bottom-[58px] z-10 flex md:hidden flex-col gap-2 bg-neutral-950 p-2 border border-neutral-700 rounded-xl mx-5 sm:mx-8 transition-opacity overflow-hidden ${
            isPaginationOpen ? "" : "opacity-0 select-none pointer-events-none"
          }`}
          onClick={() => setIsPaginationOpen(!isPaginationOpen)}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-full flex items-center justify-center text-base px-3 py-1 font-semibold rounded-lg transition-colors ${
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
    </div>
  );
};

export default Filter;
