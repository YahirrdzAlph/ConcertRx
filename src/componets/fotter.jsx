import React from "react";
import { Logo } from "../assets/Icon";

const fotter = () => {
  return (
    <div className="flex flex-col items-center py-16 px-40 gap-12 bg-slate-200">
      <div className="flex flex-col items-center gap-16 w-full h-full bg-slate-400">
        <img src={Logo} alt="" />
        <div className="flex items-start p-0 gap-8 bg-red-200 w-full justify-center">
          <ul>
            <li className="text-text text-xl ">Product</li>
            <li>Login</li>
            <li>Pricing</li>
            <li>---</li>
            <li>--</li>
          </ul>
          <ul>
            <li>Use Cases</li>
            <li>Login</li>
            <li>Pricing</li>
            <li>---</li>
            <li>--</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Login</li>
            <li>Pricing</li>
            <li>---</li>
            <li>--</li>
          </ul>
          <ul>
            <li>Support</li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li>Contact us</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center p-0 gap-8"></div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default fotter;
