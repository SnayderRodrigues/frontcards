import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "../components/Filter";

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
            <Filter />
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
