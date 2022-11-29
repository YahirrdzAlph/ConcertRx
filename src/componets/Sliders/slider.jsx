import React from "react";
import { Slider1, Slider2 } from "../../assets/Icon";
const slider = () => {
  return (
    <div className="flex flex-col items-center lg:py-[80px] lg:px-[40px] gap-7">
      <h3 className="font-normal text-base leading-6 text-para lg:leading-7">
        “Their system for getting rapid antigen tests was easy to register and
        for pickng was hassle free. I appriciate that they sell australian made
        test as well.”
      </h3>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-text text-sm text-center">Teowai Rathai</p>
        <p className="font-normal text-sm leading-3">
          Kohler, Hegmann and Littel
        </p>
      </div>
      <div className="flex gap-6">
        <img src={Slider1} alt="" />
        <img src={Slider2} alt="" />
      </div>
    </div>
  );
};

export default slider;
