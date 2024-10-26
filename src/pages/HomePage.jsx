import React from "react";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="flex justify-center items-center">
          <div className="wrapper flex flex-col justify-center items-center text-center pt-48 pb-32">
            <h1 className="flex items-center justify-center  max-w-[18ch] leading-tight mb-16">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p className="text-2xl max-w-[56ch]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, eaque. Voluptatem voluptas quaerat, similique
              repellendus.
            </p>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <div className="flex items-center justify-center gap-2">
              <button className="text-xl text-black bg-white px-4 py-2 rounded-xl">Todas</button>
              <ul className="flex items-center text-xl border border-neutral-700 rounded-xl">
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">Categoria 1</a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">Categoria 2</a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">Categoria 3 </a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">Categoria 4</a>
                </li>
                <li className="flex items-center gap-2 px-5 py-2">
                  <a href="" className="hover:text-neutral-400">Categoria 5</a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
