import React from 'react'

const Filter = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <button className="text-xl text-black bg-white px-4 py-2 rounded-xl">
        All
      </button>
      <ul className="flex items-center text-xl border border-neutral-700 rounded-xl">
        <li className="flex items-center gap-2 px-5 py-2">
          <a href="" className="hover:text-neutral-400">
            Category 1
          </a>
        </li>
        <li className="flex items-center gap-2 px-5 py-2">
          <a href="" className="hover:text-neutral-400">
            Category 2
          </a>
        </li>
        <li className="flex items-center gap-2 px-5 py-2">
          <a href="" className="hover:text-neutral-400">
            Category 3{" "}
          </a>
        </li>
        <li className="flex items-center gap-2 px-5 py-2">
          <a href="" className="hover:text-neutral-400">
            Category 4
          </a>
        </li>
        <li className="flex items-center gap-2 px-5 py-2">
          <a href="" className="hover:text-neutral-400">
            Category 5
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filter