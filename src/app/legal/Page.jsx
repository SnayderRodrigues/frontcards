import React from "react";
import AuthorImage from "../../assets/react.svg";

const LegalPage = () => {
  return (
    <>
      <section className="font-medium">
        <div className="wrapper grid grid-cols-2 gap-32 pt-48 pb-32">
          <h1 className="text-6xl font-bold uppercase">
            Termos <br /> <span className="text-neutral-400">Legais</span>
          </h1>
          <div className="flex flex-col gap-8 text-2xl text-neutral-200 max-w-[60ch]">
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
        </div>
      </section>
    </>
  );
};

export default LegalPage;
