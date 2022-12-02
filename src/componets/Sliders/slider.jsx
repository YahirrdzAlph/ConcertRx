import React from "react"
import { Slider1, Slider2 } from "../../assets/Icon"
const slider = () => {
    return (
        <div className="flex flex-col items-center lg:py-10 gap-[14px] bg-[#FAFAFA] w-full">
            <p className="font-normal text-base leading-6 text-para lg:leading-7 w-[320px] p-2 md:w-[616px]">
                “Their system for getting rapid antigen tests was easy to
                register and for pickng was hassle free. I appriciate that they
                sell australian made test as well.”
            </p>
            <div className="flex flex-col lg:gap-7">
                <div className="flex flex-col gap-2 lg:w-[169px]">
                    <p className="font-bold text-text text-sm text-center">
                        Teowai Rathai
                    </p>
                    <p className="font-normal text-para text-sm leading-4">
                        Kohler, Hegmann and Littel
                    </p>
                </div>
                <div className="flex gap-6 items-center justify-center">
                    <img src={Slider1} alt="" />
                    <img src={Slider2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default slider
