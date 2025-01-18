import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="font-medium">
        <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
          <h1 className="mb-8 lg:mb-12">Sobre Frontcards</h1>
          <div className="flex items-center gap-16">
            <div className="flex flex-col gap-8 text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200 max-w-[60ch]">
              <p>
                O Frontcards nasceu com um propósito simples e significativo:
                ajudar desenvolvedores frontend e web designers, principalmente
                aqueles que estão começando suas jornadas, a encontrarem as
                melhores ferramentas, criadores de conteúdo, recursos de
                aprendizagem e muito mais.
              </p>
              <p>
                Inspirada no incrível projeto Pillarstack, criado por Huy
                Nguyen, o Frontcards segue a mesma filosofia de ser uma ponte
                entre a comunidade e os recursos mais úteis para o
                desenvolvimento e design. Aqui, você encontrará uma seleção
                cuidadosamente curada e frequentemente atualizada de ferramentas
                e conteúdos para potencializar suas habilidades.
              </p>
              <p>
                Nosso objetivo é criar um espaço acessível e confiável para a
                comunidade de desenvolvimento e design, facilitando o acesso a
                recursos de qualidade que podem ajudar desde pequenos projetos
                pessoais até grandes desafios profissionais.
              </p>
              <div className="flex flex-col">
                <span>Snayder Rodrigues</span>
                <span className="text-neutral-400">Criador Frontcards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
