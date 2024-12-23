import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center" id="hero-section">
        <div className="wrapper flex flex-col pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 xsm:pb-16 md:pb-20">
          <h1 className="max-w-[19ch] mb-8 lg:mb-12">
            Ferramentas e Recursos úteis para <span className="text-indigo-400">Devs Frontend</span> e <span className="text-purple-400">
              Web
              Designers
            </span>.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200">
            Explore uma coleção de ferramentas selecionadas que ajudarão você
            a crescer como desenvolvedor e designer.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
