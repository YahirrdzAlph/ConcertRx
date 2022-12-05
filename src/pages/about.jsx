import React from "react"

const about = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-center items-center h-[594px]">
                <div className="flex flex-col items-center justify-center gap-6 w-[842px]">
                    <h1 className="text-text font-bold text-5xl tracking-[-0.04rem] leading-[58px]">
                        About Us
                    </h1>
                    <p className="text-2xl text-para leading-9 tracking-[0.01rem] text-center w-[743px]">
                        We are a group of{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            “Passionate healthcare”{" "}
                        </span>
                        and technology professionals{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            “Committed to building software solutions”
                        </span>{" "}
                        in the Pharma InfoTech space. We focus our work on
                        increasing{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            ”Patient safety”
                        </span>{" "}
                        and efficiency in pharmacy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about
