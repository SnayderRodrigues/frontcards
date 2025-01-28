import { useParams, useNavigate } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import useDocumentTitle from "../../hooks/useDocumentTitle.js";
import Button from "../../components/Button.jsx";

const ResourcePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const tool = resourcesData.find((tool) => tool.slug === slug);
  useDocumentTitle(`Frontcards – ${tool.title}`);

  return (
    <div className="wrapper pt-12 xl:pt-16 pb-12 md:pb-16 lg:pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-16 xl:gap-32 md:mt-8">
        <div className="w-full md:w-1/2 aspect-[3/2] md:aspect-square flex items-center justify-center bg-neutral-100 rounded-2xl">
          <div className="w-1/2 md:w-2/3 sm:p-6 md:p-8 xl:p-16">
            <img src={tool.image} alt={tool.title} className="w-full h-full" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">
            {tool.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div
              className={`w-fit flex items-center justify-center text-sm font-medium text-white px-4 py-2 rounded-lg ${
                tool.category === "Frontend"
                  ? "bg-indigo-700"
                  : tool.category === "Design"
                  ? "bg-violet-600"
                  : tool.category === "Aprendizado"
                  ? "bg-teal-700"
                  : tool.category === "Criadores"
                  ? "bg-rose-600"
                  : ""
              }`}
            >
              <span className="mb-[2px]">{tool.category}</span>
            </div>
            <span className="shrink-0 flex flex-wrap gap-2 w-fit text-sm font-medium">
              {tool.tags
                .slice()
                .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                .map((tag) => (
                  <span key={tag} className="shrink-0">
                    #{tag}
                  </span>
                ))}
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-neutral-200 mb-4">
            {tool.description}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-1 text-base sm:text-lg font-medium text-white bg-neutral-900 px-4 lg:px-6 py-3 lg:py-4 border border-neutral-800 rounded-lg transition-colors md:hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 -960 960 960"
                fill="#fff"
                className="w-3 md:w-4"
              >
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
              <span className="xsm:mb-[2px]">Voltar</span>
            </button>
            <Button text="Explorar" href={tool.source} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
