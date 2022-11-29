import React from "react";
import { Link } from "react-router-dom";
import { Logo, Menu } from "../assets/Icon";

const navBar = () => {
  return (
    <nav className="flex h-[92px] items-start content-center bg-bgPrint px-4 md:px-6 lg:px-20 w-full">
      <div className="m-auto flex w-full justify-between items-center content-center">
        <div className="mr-[60px]">
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
        <div className="flex flex-col gap-4">
          <div className="lg:flex hidden items-center gap-6 ">
            <Link className="text-[16px] font-medium text-primary">Login</Link>
            <Link>
              <button className="flex justify-center items-center px-[24px] py-[14px] bg-primary rounded-3xl text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <img src={Menu} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default navBar;
