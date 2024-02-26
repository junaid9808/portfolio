import React from "react";
import { Navbar } from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center py-20">
        <div>
          <img
            className="rounded-full"
            style={{ width: 200, height: 200 }}
            src="img1.png"
            alt="img"
          ></img>
        </div>
        <div className="mt-4 justify-center items-center">
          <h1 className="text-4xl flex justify-center items-center">
            Ali Raza!
          </h1>
          <h1 className="flex justify-center items-center text-lg text-blue-600">
            I do code&chill
          </h1>
          <p className="">
            Passionate Software Engineer With a Focus React Development
          </p>
          <p className="">
            Passionate Software Engineer With a Focus React Development
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={handleClick}
              class="btn mt-4 rounded-full  hover hover:bg-slate-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
