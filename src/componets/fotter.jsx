import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/Icon";

const fotter = () => {
  return (
    <div className="flex flex-col items-center py-16 px-40 gap-12 bg-slate-200">
      <div className="flex flex-col items-center gap-16 w-full h-full bg-slate-400">
        <img src={Logo} alt="" />
        <div className="flex items-start gap-8 w-full bg-red-100 h-[203px]">
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="text-text text-xl">Product</h4>
            <div className="flex flex-col items-start gap-3">
              <Link className="text-para font-medium text-sm">Login</Link>
              <Link className="text-para font-medium text-sm">Pricing</Link>
              <Link className="text-para font-medium text-sm">---</Link>
              <Link className="text-para font-medium text-sm">--</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="text-text text-xl">Use Cases</h4>
            <div className="flex flex-col items-start gap-3">
              <Link className="text-para font-medium text-sm">
                Ozempic Waiting List
              </Link>
              <Link className="text-para font-medium text-sm">
                Compounding Workflow
              </Link>
              <Link className="text-para font-medium text-sm">
                Vaccination Journey{" "}
              </Link>
              <Link className="text-para font-medium text-sm">
                Special Orders
              </Link>
              <Link className="text-para font-medium text-sm">
                Drug Journeys
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="text-text text-xl">Company</h4>
            <div className="flex flex-col items-start gap-3">
              <Link className="text-para font-medium text-sm">About Us</Link>
              <Link className="text-para font-medium text-sm">Pricing</Link>
              <Link className="text-para font-medium text-sm">---</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="text-text text-xl">Product</h4>
            <div className="flex flex-col items-start gap-3">
              <Link className="text-para font-medium text-sm">Login</Link>
              <Link className="text-para font-medium text-sm">Pricing</Link>
              <Link className="text-para font-medium text-sm">---</Link>
              <Link className="text-para font-medium text-sm">--</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="text-text text-xl">Product</h4>
            <div className="flex flex-col items-start gap-3">
              <Link className="text-para font-medium text-sm">Login</Link>
              <Link className="text-para font-medium text-sm">Pricing</Link>
              <Link className="text-para font-medium text-sm">---</Link>
              <Link className="text-para font-medium text-sm">--</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-0 gap-8"></div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default fotter;
