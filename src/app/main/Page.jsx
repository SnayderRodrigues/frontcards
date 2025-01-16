import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import Filter from "../../components/Filter.jsx";
import Card from "../../components/Card.jsx";
import Pagination from "../../components/Pagination.jsx";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "Todos"
  );

  const itemsPerPage = 12;

  const filteredTools = resourcesData.filter((tool) =>
    selectedCategory === "Todos"
      ? true
      : tool.category.includes(selectedCategory)
  );
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTools = filteredTools.slice(startIndex, endIndex);

  useEffect(() => {
    const params = {};
    if (selectedCategory !== "Todos") params.category = selectedCategory;
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6 mb-6 md:mb-6">
        {currentTools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        startIndex={startIndex}
        filteredTools={filteredTools}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default MainPage;
