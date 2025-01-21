import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const LegalPage = () => {
  useDocumentTitle("Frontcards – Termos Legais");

  return (
    <>
      <section className="font-medium">
        <div className="wrapper pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 md:pb-16 lg:pb-24">
          <h1 className="mb-8 lg:mb-12">Termos Legais</h1>
          <div className="flex items-center gap-16">
            <div className="max-w-[48ch] flex flex-col gap-8 text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-400">
              <p>
                Todas as ferramentas, logos, marcas e imagens mencionadas ou
                exibidas neste site são propriedades de seus respectivos
                proprietários. O Frontcards não reivindica nenhum tipo de
                propriedade sobre elas.
              </p>
              <p>
                O Frontcards não possui qualquer vínculo, parceria ou afiliação
                com as ferramentas ou empresas mencionadas no site. Nosso único
                objetivo é compartilhar recomendações com base na nossa
                experiência e pesquisa, para ajudar outros desenvolvedores e
                designers.
              </p>
              <p>
                As recomendações disponibilizadas no Frontcards são realizadas
                de forma independente e com a intenção de fornecer informações
                úteis. Não recebemos compensações financeiras ou benefícios
                diretos por mencionar qualquer ferramenta ou serviço.
              </p>
              <p>
                O Frontcards não se responsabiliza por possíveis problemas,
                danos ou prejuízos decorrentes do uso das ferramentas ou
                serviços mencionados no site. Recomendamos que você leia os
                termos e condições de cada ferramenta diretamente no site
                oficial dos respectivos proprietários antes de utilizá-las.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
