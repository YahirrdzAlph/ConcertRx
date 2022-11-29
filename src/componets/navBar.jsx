import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/Icon";

const navBar = () => {
  return (
    <div className="flex h-[92px] items-start content-center bg-bgPrint">
      <div className="m-auto flex w-full justify-between items-center content-center">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="items-center lg:flex gap-6 hidden">
          <Link className="text-sm font-bold leading-3 text-primary">
            Product
          </Link>
          <Link to="/story" className="text-sm font-bold leading-3">
            Our Story
          </Link>
          <Link to="/pricing" className="text-sm font-bold leading-3">
            Pricing
          </Link>
        </div>
        <div>
          <div className="lg:flex hidden items-center gap-6 ">
            <Link className="text-sm text-primary">Login</Link>
            <Link>
              <button className="flex justify-center items-center px-6 py-3 bg-primary rounded-3xl text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navBar;
