import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="flex items-center justify-between gap-2 mb-8">
      <div className="flex gap-2">
        <Link
          to="/"
          className="text-xl text-black bg-white px-4 py-2 rounded-xl hover:bg-neutral-300 transition-colors"
        >
          All
        </Link>
        <ul className="flex items-center text-xl border border-neutral-700 rounded-xl">
          <li className="flex items-center gap-2 px-5 py-2">
            <a href="" className="hover:text-neutral-400 transition-colors">
              Development
            </a>
          </li>
          <li className="flex items-center gap-2 px-5 py-2">
            <a href="" className="hover:text-neutral-400 transition-colors">
              Design
            </a>
          </li>
          <li className="flex items-center gap-2 px-5 py-2">
            <a href="" className="hover:text-neutral-400 transition-colors">
              Knowledge & Learning
            </a>
          </li>
          <li className="flex items-center gap-2 px-5 py-2">
            <a href="" className="hover:text-neutral-400 transition-colors">
              Editing
            </a>
          </li>
          <li className="flex items-center gap-2 px-5 py-2">
            <a href="" className="hover:text-neutral-400 transition-colors">
              Web Tool
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center text-xl px-5 py-2 border border-neutral-700 rounded-xl">
        Page Indicator
      </div>
    </div>
  );
};

export default Filter;
