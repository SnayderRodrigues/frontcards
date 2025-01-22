import React from "react";
import { useNavigate } from "react-router-dom";
import useFavoritesStore from "../store/favoritesStore.js";

const Card = ({ tool }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === tool.id);

  const handleCardClick = () => {
    navigate(`/resources/${tool.slug}`);
    window.scrollTo({ top: 0 });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(tool);
  };

  return (
    <div
      className="w-full flex flex-col justify-between gap-4 p-[22px] bg-neutral-900 rounded-xl overflow-hidden ease-in cursor-pointer transition-colors md:hover:bg-neutral-800"
      onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center pt-[50%] pb-[50%] bg-neutral-100 rounded-lg">
        <div className="absolute w-2/3 overflow-hidden">
          <img
            src={tool.image}
            alt={tool.title}
            width={256}
            height={256}
            className="w-full object-cover p-6 md:p-4"
          />
        </div>
        <button
          aria-label="Favorito"
          className={`group shrink-0 w-[40px] aspect-square absolute bottom-2 right-2 flex items-center justify-center text-sm font-medium text-white rounded-md transition-colors duration-300 ${
            tool.category === "Frontend"
              ? isFavorite
                ? "bg-indigo-700"
                : "bg-indigo-400 md:hover:bg-indigo-700"
              : tool.category === "Design"
              ? isFavorite
                ? "bg-violet-600"
                : "bg-violet-400 md:hover:bg-violet-600"
              : tool.category === "Aprendizado"
              ? isFavorite
                ? "bg-teal-700"
                : "bg-[#55aaa3] md:hover:bg-teal-700"
              : tool.category === "Criadores"
              ? isFavorite
                ? "bg-rose-600"
                : "bg-rose-400 md:hover:bg-rose-600"
              : ""
          }`}
          onClick={handleFavoriteClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className={`absolute transition-all duration-300 ${
              isFavorite ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className={`absolute transition-opacity duration-300 ${
              isFavorite ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xl md:text-2xl font-bold">{tool.title}</span>
        </div>
        <div className="flex-1 flex flex-wrap gap-[6px] text-neutral-400">
          {tool.tags
            .slice()
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .map((tag) => (
              <span key={tag} className="shrink-0">
                #{tag}
              </span>
            ))}
        </div>
        <div
          className={`w-fit flex items-center justify-center text-sm font-medium text-white px-3 py-2 rounded-md ${
            tool.category === "Frontend"
              ? "bg-indigo-700"
              : tool.category === "Design"
              ? "bg-violet-600"
              : tool.category === "Aprendizado"
              ? "bg-teal-700"
              : tool.category === "Criadores"
              ? "bg-rose-600"
              : ""
          }`}
        >
          <span className="mb-[2px]">{tool.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
