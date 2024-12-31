import React from "react";
import AuthorImage from "../../../public/author-photo.webp";

const AboutPage = () => {
  return (
    <>
      <section className="font-medium">
        <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
          <h1 className="mb-8 lg:mb-12">
            Sobre <br /> Frontcards
          </h1>
          <div className="flex items-center gap-16">
            <div className="flex flex-col gap-8 text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200 max-w-[60ch]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                voluptatibus minima fuga ipsa harum consectetur iste sunt.
                Officia ab explicabo, facilis ut ad dolore error quo quas
                commodi eaque quidem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minima et ipsum architecto cupiditate blanditiis sint,
                voluptates similique pariatur, ducimus deleniti doloremque!
                Asperiores, ex aliquam rerum id a consectetur saepe?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates laborum possimus eveniet vel amet inventore magni
                dignissimos in alias debitis non officia, necessitatibus sequi,
                eaque beatae consectetur! Facilis, incidunt aperiam!
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={AuthorImage}
                  alt=""
                  className="w-12 aspect-square rounded-full"
                />
                <div className="flex flex-col">
                  <span>Snayder Rodrigues</span>
                  <span className="text-neutral-400">
                    Desenvolvedor Frontend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
