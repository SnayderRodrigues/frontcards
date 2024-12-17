import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <footer className="border-t-2 border-t-neutral-800">
      <div className="wrapper relative flex flex-col md:flex-row justify-between gap-16 pt-16 pb-28 md:pb-8">
        <div className="flex flex-col justify-between gap-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="w-fit text-3xl sm:text-3xl md:text-4xl font-bold uppercase hover:text-neutral-400 transition-colors"
            >
              Frontend Tools
            </a>
            <p className="max-w-[40ch] text-base md:text-lg lg:text-xl text-neutral-200">
              Uma coleção selecionada de recursos de desenvolvimento e design,
              frequentemente atualizada para a comunidade.
            </p>
          </div>
          <div className="text-base font-medium">
            © 2024{" "}
            <a
              href="https://snayderrodrigues.vercel.app/"
              target="_blank"
              className="font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              Snayder Rodrigues
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg lg:text-xl font-medium">
          <Link
            to="/"
            className="w-fit hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <Link
            to="/about"
            className="w-fit hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            Sobre
          </Link>
          <Link
            to="/legal"
            className="w-fit hover:text-neutral-400 transition-colors"
            onClick={scrollToTop}
          >
            Termos Legais
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit hover:text-neutral-400 transition-colors"
          >
            Indicar Ferramenta
          </a>
        </div>
        <button
          className="w-fit absolute bottom-28 right-0 flex md:hidden items-center gap-1 bg-neutral-900 p-3 border-2 border-neutral-800 rounded-xl"
          onClick={scrollToTop}
        >
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
          
        </button>
      </div>
    </footer>
  );
};

export default Footer;
