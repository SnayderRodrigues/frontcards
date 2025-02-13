import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0 });

  const smallMarginPaths = ["/resources/", "/favorites", "/about", "/legal"];

  const isSmallMarginPath = smallMarginPaths.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <footer className="bg-neutral-950 border-t border-t-neutral-800">
      <div
        className={`wrapper relative flex flex-col md:flex-row justify-between gap-16 pt-16 ${
          isSmallMarginPath ? "pb-6" : "pb-28"
        } md:pb-8`}
      >
        <div className="flex flex-col justify-between gap-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="w-fit flex items-center gap-4 mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-md"
            >
              <img
                src={Logo}
                alt="Logo"
                width={60}
                height={60}
                className="w-12 md:w-16"
              />
              <div className="text-4xl md:text-[54px] font-bold">
                Frontcards
              </div>
            </a>
            <p className="max-w-[40ch] text-base md:text-lg lg:text-xl text-neutral-200">
              Uma coleção selecionada de recursos de desenvolvimento e design,
              frequentemente atualizada para a comunidade.
            </p>
          </div>
          <div className="text-base font-medium flex flex-col">
            <span>Frontcards © 2025.</span>
            <div className="flex gap-1 text-neutral-400">
              <span>Criado por</span>
              <a
                href="https://snayderrodrigues.vercel.app/"
                target="_blank"
                className="group relative flex items-center gap-[2px] transition-colors md:hover:text-neutral-200"
              >
                <span>Snayder Rodrigues</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 -960 960 960"
                  fill="#a3a3a3"
                  className="md:fill-[#e5e5e5] mt-[3px] opacity-100 md:opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col gap-[18px] md:gap-1 text-lg font-medium">
          <Link
            to="/"
            className="w-fit md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <Link
            to="/favorites"
            className="w-fit md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Favoritos
          </Link>
          <Link
            to="/about"
            className="w-fit md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Sobre
          </Link>
          <Link
            to="/legal"
            className="w-fit md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
            onClick={scrollToTop}
          >
            Termos Legais
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit flex items-center gap-1 md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
          >
            <span>Indique um Card</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className="mt-[2px]"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </a>
          <a
            href="https://forms.gle/ZVfjAj1TDQuinBVz8"
            target="_blank"
            className="w-fit flex items-center gap-1 md:p-2 lg:px-3 lg:py-2 rounded-lg md:hover:bg-neutral-800 transition-colors"
          >
            <span>Feedback e Sugestões</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className="mt-[2px]"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </a>
        </div>
        <button
          className={`w-fit absolute ${
            isSmallMarginPath ? "bottom-6" : "bottom-28"
          } right-0 flex md:hidden items-center gap-1 bg-neutral-900 p-3 border border-neutral-800 rounded-lg`}
          onClick={scrollToTop}
          aria-label="Voltar para o topo da página"
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
