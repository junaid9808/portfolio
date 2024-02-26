import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

export const Navbar = () => {
  return (
    <>
      <div className="fixed mt-2  text-white flex w-full justify-between items-center flex-row p-4 bg-black rounded-t-md  z-50 ">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-serif">Portfolio.</h1>
          </Link>
        </div>
        <div>
          <ul class="nav-menu">
            <div className="flex flex-row justify-center items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
