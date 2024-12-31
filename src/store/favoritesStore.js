import { create } from "zustand";

const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  toggleFavorite: (tool) =>
    set((state) => {
      const isFavorited = state.favorites.some((fav) => fav.id === tool.id);
      const updatedFavorites = isFavorited
        ? state.favorites.filter((fav) => fav.id !== tool.id)
        : [...state.favorites, tool];
      
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { favorites: updatedFavorites };
    }),
}));

export default useFavoritesStore;
