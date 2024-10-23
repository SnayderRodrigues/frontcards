import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 w-full border-b border-b-white border-opacity-20 items-center justify-center flex">
      <nav className="wrapper flex justify-between items-center py-3">
        <a href="/" className="text-3xl font-bold uppercase">Frontend Tools</a>
        <div className="flex items-center gap-8">
          <a href="/about">About</a>
          <a href="" className="bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">Submit a Resource</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
