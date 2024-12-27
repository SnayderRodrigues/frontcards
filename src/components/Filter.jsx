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
    "Todos",
    "Frontend",
    "Design",
    "Aprendizado",
    "Criadores",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="md:mb-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ul className="hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl">
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 px-2 lg:px-3 xl:px-4 py-1 xl:py-2 rounded-lg cursor-pointer transition-colors ${
                selectedCategory === category ? "" : "hover:bg-neutral-800"
              } ${
                selectedCategory === category && category === "Todos"
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
        <div className="shrink-0 hidden md:flex items-center gap-2 text-base lg:text-lg font-semibold bg-neutral-900 p-2 border-2 border-neutral-800 rounded-xl overflow-hidden">
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
      <div className="fixed bottom-4 left-0 right-0 z-50 flex md:hidden gap-2 bg-neutral-900 p-3 border-2 border-neutral-800 rounded-xl mx-5 sm:mx-8 shadow-4xl">
        <button
          className={`w-full md:hidden flex items-center gap-2 font-semibold bg-neutral-800 p-3 rounded-lg`}
          onClick={handleCategoryIsOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-550-30v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm230-30v-80h320v80H480Zm230 320ZM250-660Z" />
          </svg>
          <span className="flex-1 flex rounded-lg cursor-pointer transition-colors">
            {selectedCategory}
          </span>
        </button>
        <ul
          className={`absolute left-[-2px] right-[-2px] bottom-[78px] z-10 flex flex-col md:hidden gap-2 text-base font-semibold bg-neutral-900 p-3 border-2 border-neutral-800 rounded-xl transition-opacity duration-300 ${
            isOpen ? "" : "opacity-0 select-none pointer-events-none"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                selectedCategory === category && selectedCategory === "Todos"
                  ? "bg-neutral-800"
                  : ""
              } ${
                selectedCategory === category && selectedCategory === "Frontend"
                  ? "bg-indigo-700"
                  : ""
              } ${
                selectedCategory === category && selectedCategory === "Design"
                  ? "bg-purple-600"
                  : ""
              } ${
                selectedCategory === category &&
                selectedCategory === "Aprendizado"
                  ? "bg-emerald-600"
                  : ""
              } ${
                selectedCategory === category &&
                selectedCategory === "Criadores"
                  ? "bg-rose-600"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex items-center gap-2 bg-neutral-800 p-3 rounded-lg"
          onClick={handleIsPaginationOpen}
        >
          <span className="flex-1 flex font-semibold rounded-lg cursor-pointer transition-colors">
            {currentPage}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z" />
          </svg>
        </button>
        <div
          className={`absolute left-[-2px] right-[-2px] bottom-[78px] z-10 flex md:hidden flex-col gap-2 bg-neutral-900 p-3 border-2 border-neutral-800 rounded-xl transition-opacity duration-300 overflow-hidden ${
            isPaginationOpen ? "" : "opacity-0 select-none pointer-events-none"
          }`}
          onClick={() => setIsPaginationOpen(!isPaginationOpen)}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0 });
              }}
              className={`w-full flex items-center justify-start text-base font-semibold p-3 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? "bg-neutral-800"
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
