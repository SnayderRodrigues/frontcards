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
      className="relative w-full flex flex-col justify-between gap-4 p-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl overflow-hidden transition-colors ease-in cursor-pointer md:hover:border-neutral-600"
      onClick={handleCardClick}
    >
      <div className="aspect-[5/4] flex items-center justify-center bg-neutral-100 rounded-lg">
        <img
          src={tool.image}
          alt={tool.title}
          width={256}
          height={256}
          className="w-2/3 p-6"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xl md:text-2xl font-bold mt-[5px] md:mt-0">
            {tool.title}
          </span>
          <button
            aria-label="Favorito"
            className={`group w-fit relative flex items-center justify-center text-sm font-semibold text-white
            ${
              tool.category === "Frontend" && isFavorite
                ? "bg-indigo-700"
                : tool.category === "Frontend"
                ? "bg-indigo-900 hover:bg-indigo-700"
                : ""
            }
            ${
              tool.category === "Design" && isFavorite
                ? "bg-purple-600"
                : tool.category === "Design"
                ? "bg-purple-900 hover:bg-purple-600"
                : ""
            }
            ${
              tool.category === "Aprendizado" && isFavorite
                ? "bg-emerald-700"
                : tool.category === "Aprendizado"
                ? "bg-emerald-900 hover:bg-emerald-700"
                : ""
            }
            ${
              tool.category === "Criadores" && isFavorite
                ? "bg-rose-600"
                : tool.category === "Criadores"
                ? "bg-rose-900 hover:bg-rose-600"
                : ""
            } p-[10px] md:px-2 md:py-[7px] rounded-md transition-colors`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            )}
          </button>
        </div>
        <span className="flex flex-wrap gap-[6px] text-neutral-400">
          {tool.tags.map((tag, index) => (
            <span key={index} className="shrink-0">
              #{tag}
            </span>
          ))}
        </span>
        <p className="flex-1 text-neutral-400">{tool.description}</p>
        <div
          className={`w-fit flex items-center justify-center text-sm font-semibold text-white px-3 py-2 rounded-md ${
            tool.category === "Frontend" ? "bg-indigo-700" : ""
          } ${tool.category === "Design" ? "bg-purple-600" : ""} ${
            tool.category === "Aprendizado" ? "bg-emerald-700" : ""
          } ${tool.category === "Criadores" ? "bg-rose-600" : ""}`}
        >
          <span className="mb-[2px]">{tool.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
