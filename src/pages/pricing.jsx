import React from "react"
import { Listicon, minus, plus } from "../assets/Icon"

const pricing = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full lg:h-[572px] bg-bg flex justify-center ">
                <div className="flex flex-col items-center gap-4 p-0 mt-[200px]">
                    <h1 className="font-bold text-5xl tracking-[-0.2rem] text-text">
                        Plans & Pricing
                    </h1>
                    <p className="text-lg font-normal leading-7 tracking-tight lg:w-[534px]">
                        We’re working on a suit of tools to make managing
                        complex systems easier, for everyone. We can’t wait to
                        hear what you think
                    </p>
                </div>
            </div>
            <div className="lg:h-[556px] flex flex-col px-[80px] justify-center">
                <div className="flex gap-8 lg:h-[400px]">
                    {/* car1 */}
                    <div className="flex gap-8 h-[516px] relative lg:bottom-[160px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col lg:gap-[37px] items-start p-10">
                            <div className="flex flex-col lg:gap-[17px]">
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="lg:text-2xl font-bold leading-6 text-text  lg:w-[98px] lg:h-[24px]">
                                        Standard
                                    </h3>
                                    <p className="lg:text-xs lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                        Hit the Ground Running
                                    </p>
                                </div>
                                <h2 className=" text-5xl font-bold h-[48px] leading-[48px]">
                                    $29.95
                                    <span className="text-xl font-bold leading-[48px]">
                                        / month
                                    </span>
                                </h2>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Unlimited boards
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Free SENDER ID
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            IP address login
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Buy SMS credits for $0.1 /credit
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            GST included in pricing
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Credits do not expire
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-primary rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-white">
                                    Get Started
                                </p>
                            </button>
                        </div>
                    </div>
                    {/* car2 */}
                    <div className="flex gap-8 h-[516px] relative lg:bottom-[160px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col lg:gap-[37px] items-start p-10">
                            <div className="flex flex-col lg:gap-[17px]">
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="lg:text-2xl leading-6 text-text font-bold text-start lg:w-[98px] lg:h-[24px]">
                                        Pro
                                    </h3>
                                    <p className="lg:text-xs lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                        Power up your business
                                    </p>
                                </div>
                                <h2 className=" text-5xl font-bold h-[48px] leading-[48px]">
                                    $39.95
                                    <span className="text-xl font-bold leading-[48px]">
                                        / month
                                    </span>
                                </h2>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Everything in Standard
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Two way messaging
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            One chatbot
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-transparent border border-solid border-zinc-300 rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-zinc-500">
                                    Coming Soon
                                </p>
                            </button>
                        </div>
                    </div>
                    {/* car3 */}
                    <div className="flex gap-8 h-[516px] relative lg:bottom-[160px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col lg:gap-[37px] items-start p-10">
                            <div className="flex flex-col lg:gap-[17px]">
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="lg:text-2xl font-bold leading-6 text-text  lg:w-[98px] lg:h-[24px]">
                                        Pro Plus
                                    </h3>
                                    <p className="lg:text-xs lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                        Customized just for you
                                    </p>
                                </div>
                                <h2 className=" text-5xl font-bold h-[48px] leading-[48px]">
                                    $89.95
                                    <span className="text-xl font-bold leading-[48px]">
                                        / month
                                    </span>
                                </h2>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Everything in Pro
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Print address labels locally
                                        </li>
                                        <li className="text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Integration with Australia Post
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-transparent border border-solid border-zinc-300 rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-zinc-500">
                                    Coming Soon
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 lg:w-[1280px] lg:h-[146px] bg-zinc-50">
                    <h5 className="font-bold text-lg">Note:</h5>
                    <ul className="flex flex-col items-start list-inside list-decimal">
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            Pricing is subject to change.
                        </li>
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            Transactions are processed in Australian Dollars
                            (AUD).
                        </li>
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            We use Stripe to process your payment. It's the same
                            payment provider used by products such as Twitter,
                            Pinterest, and Lyft. We do not handle your credit
                            card information directly.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:h-[889px] lg:py-[120px] lg:px-[80px] flex flex-col gap-16">
                <div className="w-full flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1 className="text-5xl font-bold lg:leading-[58px] lg:w-[768px] tracking-tighter">
                            Frequently asked questions
                        </h1>
                        <p className="text-lg text-zinc-600 leading-[18px] text-center tracking-[0.01rem]">
                            Everything you need to know about the product and
                            billing.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:px-[32px] lg:h-[489px]">
                    <div className="flex flex-col items-start gap-8">
                        {/* cards */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-start gap-[40px]">
                                <div className="flex w-full justify-between">
                                    <div className="flex flex-col items-start gap-2">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Is there a free trial available?
                                        </h6>
                                        <p className="text-base text-zinc-600 font-normal text-start leading-6 lg:w-[720px]">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={minus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between lg:w-[768px]">
                                    <div className="flex flex-col items-start lg:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            What is your cancellation policy?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between lg:w-[768px]">
                                    <div className="flex flex-col items-start lg:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Can I change my plan later?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between lg:w-[768px]">
                                    <div className="flex flex-col items-start lg:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Can other info be added to an
                                            invoice?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between lg:w-[768px]">
                                    <div className="flex flex-col items-start lg:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            How does billing work?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between lg:w-[768px]">
                                    <div className="flex flex-col items-start lg:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            How do I change my account email?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricing

// Pricing is subject to change.
// Transactions are processed in Australian Dollars (AUD).
// We use Stripe to process your payment. It's the same payment provider used by products such as Twitter, Pinterest, and Lyft. We do not handle your credit card information directly.
