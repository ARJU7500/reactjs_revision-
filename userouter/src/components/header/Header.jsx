import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2Fs_9f%2F9fcb6fc4f84ef26b5173ebe70df0c656.jpeg&f=1&nofb=1&ipt=6ee3757ab8dd443a79aa89c7a1a75dc5bae59dda04274fb36aee06ca4540c085&ipo=images"
              className="mr-3 h-12"
              alt="logo"
            />
          </Link>
        </div>
        <div></div>
        <div></div>
      </nav>
    </header>
  );
}

export default Header;
