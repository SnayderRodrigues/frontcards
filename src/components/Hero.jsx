import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center" id="hero-section">
        <div className="wrapper flex flex-col md:items-center md:text-center pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 xsm:pb-16 md:pb-20 lg:pb-28">
          <h1 className="max-w-[23ch] mb-8 lg:mb-12">
            Sua coleção de ferramentas para{" "}
            <span className="text-indigo-400">Devs Frontend</span> e{" "}
            <span className="text-purple-400">Web Designers</span>.
          </h1>
          <p className="max-w-[44ch] text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200">
            Explore ferramentas selecionadas que irão ajudar você a aprimorar
            suas habilidades em desenvolvimento e design.
          </p>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit md:hidden flex items-center gap-1 text-base sm:text-lg font-medium bg-indigo-700 px-4 py-3 rounded-lg mt-8 transition-colors cursor-pointer"
          >
            <span className="shrink-0">Indique um Card</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className="w-[18px] sm:w-5 lg:w-6 mt-[2px]"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
