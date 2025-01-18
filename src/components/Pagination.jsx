import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  startIndex,
  filteredTools,
  itemsPerPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center md:justify-center gap-6 mb-12 md:mb-16">
      <div className="flex items-center gap-2">
        <button
          className={`bg-neutral-800 md:bg-neutral-900 p-2 rounded-lg md:rounded-xl transition-colors ${
            currentPage === 1 ? "" : "md:hover:bg-neutral-800"
          }`}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              window.scrollTo({ top: 0 });
            }
          }}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <div className="flex items-center justify-center p-1 xsm:p-2 md:p-[10px] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className={`${
                currentPage === 1 ? "fill-neutral-700" : ""
              }`}
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
        </button>
        <button
          className={`bg-neutral-800 md:bg-neutral-900 p-2 rounded-lg md:rounded-xl transition-colors ${
            currentPage === totalPages ? "" : "md:hover:bg-neutral-800"
          }`}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
              window.scrollTo({ top: 0 });
            }
          }}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
        >
          <div className="flex items-center justify-center p-1 xsm:p-2 md:p-[10px] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className={`${
                currentPage === totalPages
                  ? "fill-neutral-700"
                  : ""
              }`}
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="w-fit hidden md:flex items-center gap-2 text-lg font-medium bg-neutral-900 p-2 rounded-xl overflow-hidden">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => {
              setCurrentPage(index + 1);
              window.scrollTo({ top: 0 });
            }}
            className={`w-[44px] aspect-square flex items-center justify-center rounded-lg transition-colors ${
              currentPage === index + 1
                ? "bg-neutral-100 text-black"
                : "hover:bg-neutral-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* <div className="text-base lg:text-lg text-neutral-400 cursor-default">
        <span className="text-white">
          {startIndex + 1} -{" "}
          {currentPage == totalPages
            ? filteredTools.length
            : itemsPerPage * currentPage}
        </span>{" "}
        de {filteredTools.length} cards
      </div> */}
    </div>
  );
};

export default Pagination;
