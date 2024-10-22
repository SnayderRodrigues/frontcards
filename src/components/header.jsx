import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-400 py-4">
      <div className="wrapper flex items-center justify-between">
        <a href="/">Frontend Tools</a>
        <div className="flex items-center gap-8">
            <a href="/about">About</a>
          <a href="">Submit a Resource</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
