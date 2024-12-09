import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center" id="hero-section">
        <div className="wrapper flex flex-col pt-32 sm:pt-36 lg:pt-40 xl:pt-48 pb-16 xsm:pb-20 md:pb-24 xl:pb-32">
          <h1 className="flex max-w-[22ch] leading-tight mb-8 lg:mb-12 xl:mb-16">
            Handpicked Resources and Tools for Frontend Developers and Web
            Designers.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch]">
            Explore a collection of curated tools and resources that will
            enhance your skills and help you grow as a developer and designer.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
