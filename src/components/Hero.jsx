import React from "react";
import Button from "./Button";

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
          <Button
            text="Indique um Card"
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            className="md:hidden px-4 py-3 mt-8"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
