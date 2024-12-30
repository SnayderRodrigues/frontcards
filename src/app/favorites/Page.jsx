import React from "react";
import { Link } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import Card from "../../components/Card.jsx";

const FavoritesPage = () => {
  const favoriteTools = resourcesData.filter((tool) => tool.isFavorite);

  return (
    <>
      <section>
        <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
          <h1 className="mb-8 lg:mb-12">Seus Favoritos</h1>
          {favoriteTools.length === 0 ? (
            <>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200 mb-8 lg:mb-12">
                Você ainda não adicionou nenhum card aos favoritos.
              </p>
              <Link
                to="/"
                className="w-fit flex items-center justify-center gap-1 text-base sm:text-lg lg:text-xl font-medium text-white bg-neutral-900 px-3 py-3 xsm:px-4 xsm:py-3 md:px-6 md:py-4 border-2 border-neutral-800 rounded-lg transition-colors hover:bg-neutral-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 -960 960 960"
                  fill="#fff"
                  className="w-3 md:w-4 ml-[-4px]"
                >
                  <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
                <span className="xsm:mb-[2px]">Voltar à Página Inicial</span>
              </Link>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6 mb-6 md:mb-6">
              {favoriteTools.map((tool) => (
                <Card key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
