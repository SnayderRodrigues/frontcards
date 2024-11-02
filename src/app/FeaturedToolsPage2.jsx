import React from "react";
import { Link } from "react-router-dom";
import toolsData from "../data/toolsData";
import Filter from "../components/Filter";
import ToolCard from "../components/ToolCard";

const FeaturedTools = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <section className="wrapper">
      <Filter />
      <div className="grid grid-cols-4 gap-8 mb-16">
        {toolsData.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="flex justify-center gap-8 text-2xl mb-16">
        <Link to="/" className="hover:text-neutral-400" onClick={scrollToTop}>
          &lt;Previous
        </Link>
        <span>2 of 2</span>
        <Link className="text-neutral-600 cursor-default">Next&gt;</Link>
      </div>
    </section>
  );
};

export default FeaturedTools;
