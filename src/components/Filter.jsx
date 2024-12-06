import React from "react";

const Filter = ({
  totalPages,
  currentPage,
  setCurrentPage,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Knowledge & Learning",
    "Creators",
    "Tools",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="sm:flex gap-2">
        <ul className="flex items-center gap-2 text-xl p-2 border border-neutral-700 rounded-xl">
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg cursor-pointer transition-colors ${
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
      </div>
      <div className="shrink-0 flex items-center gap-2 p-2 border border-neutral-700 rounded-xl overflow-hidden">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[42px] aspect-square flex items-center justify-center font-semibold rounded-lg transition-colors ${
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
