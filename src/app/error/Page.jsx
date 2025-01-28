import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  useDocumentTitle("Frontcards – Página não encontrada");

  return (
    <>
      <Header />
      <main>
        <div className="wrapper flex flex-col pt-12 xl:pt-16 pb-12 xsm:pb-16 md:pb-20">
          <h1 className="max-w-[19ch] mb-8 lg:mb-12">Página não encontrada.</h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200 mb-8 lg:mb-12">
            Lamentamos, mas a página que você está procurando não existe ou foi
            movida. Tente retornar à página inicial.
          </p>
          <Link
            to="/"
            className="w-fit flex items-center justify-center gap-1 text-base sm:text-lg font-medium text-white bg-neutral-900 px-4 lg:px-6 py-3 lg:py-4 border border-neutral-800 rounded-lg transition-colors md:hover:bg-neutral-800"
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
