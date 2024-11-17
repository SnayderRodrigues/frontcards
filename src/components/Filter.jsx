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
    "Editing",
    "Web Tool",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-2">
        <ul className="flex items-center gap-2 text-xl p-2 border border-neutral-700 rounded-xl overflow-hidden">
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "hover:bg-neutral-800"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 p-2 border border-neutral-700 rounded-xl overflow-hidden">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-[42px] aspect-square flex items-center justify-center font-semibold rounded-lg transition-colors ${
              currentPage === index + 1
                ? "bg-white text-black"
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
