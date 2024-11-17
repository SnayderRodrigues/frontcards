import React from "react";

const Filter = ({
  totalPages,
  currentPage,
  setCurrentPage,
  setSelectedCategory,
}) => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Knowledge & Learning",
    "Editing",
    "Web Tool",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex items-center justify-between gap-2 mb-8">
      <div className="flex gap-2">
        <ul className="flex items-center text-xl border border-neutral-700 rounded-xl">
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:text-neutral-400 transition-colors"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[42px] aspect-square flex items-center justify-center font-semibold rounded-xl transition-colors ${
              currentPage === index + 1
                ? "bg-white text-black"
                : "text-neutral-600 border border-neutral-700 hover:bg-neutral-400"
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
