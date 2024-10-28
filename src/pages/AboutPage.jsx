import React from "react";
import AuthorImage from "../assets/react.svg";

const AboutPage = () => {
  return (
    <main>
      <section className="flex justify-center items-center">
        <div className="wrapper flex justify-between gap-32 pt-48 pb-32">
          <h1 className="text-6xl font-bold uppercase">
            About <br /> Frontend Tools
          </h1>
          <div className="flex flex-col gap-8 text-2xl text-neutral-400 max-w-[60ch]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              voluptatibus minima fuga ipsa harum consectetur iste sunt. Officia
              ab explicabo, facilis ut ad dolore error quo quas commodi eaque
              quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              voluptatibus minima fuga ipsa harum consectetur iste sunt. Officia
              ab explicabo, facilis ut ad dolore error quo quas commodi eaque
              quidem.
            </p>
            <div className="text-base flex items-center gap-4">
              <img src={AuthorImage} alt="" />
              <div className="flex flex-col">
                <span className="text-white text-xl">Snayder Rodrigues</span>
                <span>snayderrodrigues@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
