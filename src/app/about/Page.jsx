import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const AboutPage = () => {
  useDocumentTitle("Frontcards – Sobre");

  return (
    <>
      <section className="font-medium">
        <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
          <h1 className="mb-8 lg:mb-12">Sobre o Frontcards</h1>
          <div className="flex items-center gap-16">
            <div className="max-w-[48ch] flex flex-col gap-8 text-base sm:text-lg lg:text-xl xl:text-2xl text-pretty text-neutral-400">
              <p>
                O Frontcards foi desenvolvido com um propósito simples: ajudar
                desenvolvedores frontend e web designers, principalmente aqueles
                que estão começando suas jornadas, a encontrarem ferramentas,
                conteúdos e recursos de aprendizagem que ajudam a potencializar
                suas habilidades.
              </p>
              <p>
                Aqui, uma seleção de ferramentas e recursos foi cuidadosamente
                escolhida por mim e por outros colaboradores com o objetivo de
                criar um espaço acessível e confiável para a comunidade web,
                facilitando o acesso a recursos de qualidade.
              </p>
              <div className="flex flex-col">
                <span className="text-white">Snayder Rodrigues</span>
                <span>Criador do Frontcards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
