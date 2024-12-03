import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center">
        <div className="wrapper flex flex-col pb-24 pt-48 xl:pb-32">
          <h1 className="flex max-w-[18ch] leading-tight mb-8 lg:mb-12 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            eaque. Voluptatem voluptas quaerat, similique repellendus.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
