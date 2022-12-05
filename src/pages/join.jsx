import React from "react"

const Join = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full lg:h-[776px] flex flex-col items-center gap-12">
                <div className="flex flex-col gap-6 w-[621px]">
                    <div className="flex flex-col items-center gap-6 mt-[188px]">
                        <h1 className="text-5xl font-bold leading-[58px] tracking-[-0.04rem] w-[298px]">
                            Join our team!
                        </h1>
                        <p className="text-xl leading-[26px] text-center tracking-[-0.01rem]">
                            All of us at ConcertRx are on the same mission:{" "}
                        </p>
                    </div>
                    <p className="font-semibold italic text-zinc-800 text-xl leading-[26px] tracking-[-0.01rem]">
                        {" "}
                        “To help pharmacies build efficient internal processes,
                        powerful patient communication and a robust patient
                        safety posture”
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 w-[622px]">
                    <div className="flex items-start w-full px-[24px] py-[16px] gap-[10px] bg-zinc-50">
                        <p className="text-lg leading-7 tracking-[-0.01rem]">
                            Do you love challenging the status quo, every day?
                        </p>
                    </div>
                    <div className="flex items-start w-full px-[24px] py-[16px] gap-[10px] bg-zinc-50">
                        <p className="text-lg leading-7 tracking-[-0.01rem]">
                            Interested in joining a team of smart, fun, and
                            hardworking healthTechies?
                        </p>
                    </div>
                    <div className="flex items-start text-start w-full px-[24px] py-[16px] gap-[10px] bg-zinc-50">
                        <p className="text-lg leading-7 tracking-[-0.01rem]">
                            Are you interested in using your super power to
                            build better and efficient systems?
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:h-[592px] flex flex-col items-center p-20 gap-16 bg-zinc-50">
                <div className="flex flex-col items-center gap-4 lg:w-[624px]">
                    <h1 className="text-4xl font-bold leading-[47px] tracking-[-0.01rem]">
                        Create amazing things with us!
                    </h1>
                    <p className="text-zinc-600 text-lg leading-[27px] text-center">
                        We’re always eager to meet fresh talent, so send us a
                        brief message introducing your super power!{" "}
                    </p>
                </div>
                <div className="">
                    <div className="grid lg:grid-cols-2 lg:mb-4 lg:gap-4">
                        <div>
                            <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="bg-white border border-zinc-200 text-zinc-500 h-[46px] lg:w-[304px] text-sm rounded-lg focus:ring-primary focus:border-primary block px-[20px] py-[16px] placeholder-zinc-400"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="bg-white border border-zinc-200 text-zinc-500 h-[46px] w-[304px] text-sm rounded-lg focus:ring-primary focus:border-primary block px-[20px] py-[16px] placeholder-zinc-400"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="lg:col-start-1 lg:col-end-3">
                            <textarea
                                name=""
                                id=""
                                className="w-full bg-white border h-[133px] border-zinc-200 text-zinc-500 text-sm rounded-lg px-[20px] py-[10px]"
                                placeholder="Your Message..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <button className="text-base font-medium leading-4 bg-primary w-[99px] h-[40px] rounded-[58px] text-white">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
