import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper flex flex-col pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 xsm:pb-16 md:pb-20">
          <h1 className="max-w-[19ch] mb-8 lg:mb-12">Página não encontrada.</h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200 mb-6">
            Lamentamos, mas a página que você está procurando não existe ou foi
            movida. Tente retornar à página inicial.
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
