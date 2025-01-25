import useDocumentTitle from "../../hooks/useDocumentTitle";
import useFavoritesStore from "../../store/favoritesStore.js";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const FavoritesPage = () => {
  useDocumentTitle("Frontcards – Favoritos");

  const { favorites } = useFavoritesStore();

  return (
    <section>
      <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
        <h1 className="mb-8 lg:mb-12">Seus Favoritos</h1>
        {favorites.length === 0 ? (
          <>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200 mb-8 lg:mb-12">
              Você ainda não adicionou nenhum card aos favoritos.
            </p>
            <Link
              to="/"
              className="w-fit flex items-center justify-center gap-1 text-base sm:text-lg font-medium text-white bg-neutral-800 md:bg-neutral-900 px-4 lg:px-6 py-3 lg:py-4 rounded-lg transition-colors md:hover:bg-neutral-800"
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
          <>
            <Link
              to="/"
              className="w-fit flex items-center justify-center gap-1 text-base sm:text-lg lg:text-xl font-medium text-white bg-neutral-800 md:bg-neutral-900 px-4 lg:px-6 py-3 lg:py-4 rounded-lg mb-8 transition-colors md:hover:bg-neutral-950"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6 mb-6 md:mb-6">
              {favorites.map((tool) => (
                <Card key={tool.id} tool={tool} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
