import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="flex items-center" id="hero-section">
        <div className="wrapper flex flex-col md:items-center md:text-center pt-12 xl:pt-16 pb-12 xsm:pb-16 md:pb-20 lg:pb-28">
          <div className="w-fit flex items-center justify-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-3 py-2 rounded-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="m489-460 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104Zm19 260h224q-7 26-24 42t-44 20L228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v80l-36 5 54 437 290-36Zm-148-80q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm0-80h440v-440H360v440Zm220-220ZM218-164Z" />
            </svg>
            <span>Cards cuidadosamente selecionados</span>
          </div>
          <h1 className="max-w-[23ch] mb-8 lg:mb-12">
            Sua coleção de ferramentas para{" "}
            <span className="text-transparent bg-gradient-to-r from-[#6a6ff3] via-[#7279f5] to-indigo-400 bg-clip-text">
              Devs Frontend
            </span>{" "}
            e{" "}
            <span className="text-transparent bg-gradient-to-r from-[#ad61f8] via-[#b36cf9] to-purple-400 bg-clip-text">
              Web Designers
            </span>
            .
          </h1>
          <p className="max-w-[44ch] text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200">
            Explore ferramentas selecionadas que irão ajudar você a aprimorar
            suas habilidades em desenvolvimento e design.
          </p>
          <Button
            text="Indique um Card"
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            className="md:hidden px-5 py-4 mt-8"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
