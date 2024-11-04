import React from "react";
import AuthorImage from "../../assets/react.svg";

const AboutPage = () => {
  return (
    <>
      <section className="font-medium">
        <div className="wrapper grid grid-cols-2 gap-32 pt-48">
          <h1 className="text-6xl font-bold uppercase">
            About <br />{" "}
            <span className="text-neutral-400">Frontend Tools</span>
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
          </div>
        </div>
      </section>
      <section className="font-medium">
        <div className="wrapper grid grid-cols-2 gap-32 pt-48 pb-32">
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
              <div className="flex flex-col text-2xl">
                <span className="text-white">Snayder Rodrigues</span>
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
          <img
            src={AuthorImage}
            alt=""
            className="w-full max-h-96 border-[4px] border-neutral-700 rounded-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
