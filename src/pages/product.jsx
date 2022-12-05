import React from "react"
import { NavBar, Footer } from "../componets"
import { Link } from "react-router-dom"
import { Slider } from "../componets/Sliders"
import {
    Star,
    Like,
    Arrow1,
    Arrow2,
    ArrowInv,
    Arrow3,
    Rayo,
    EasyStart,
    EasyWork,
    EasyWorkicon,
    ManageIcon,
    MsgIcon
} from "../assets/Icon"
const product = () => {
    return (
        <div className="w-full h-full">
            <NavBar />
            {/* Header of the page */}
            <section className="w-full h-[400px] bg-bgPrint md:h-[492px] lg:h-[640px] mb-[48px] flex md:mt-[52px] lg:mt-0 lg:items-center justify-center">
                <div className=" md:w-[516px] md:h-[308px] lg:w-[624px] lg:h-[408px] gap-[32px] flex flex-col">
                    <div className="flex flex-col md:gap-[17.5px] lg:gap-6 items-center">
                        <div className="flex items-center justify-center gap-[15px] leading-5">
                            <img src={Star} alt="" />
                            <p className="text-xs font-medium text-para md:text-sm">
                                Trusted by over 1,000 customers
                            </p>
                        </div>
                        {/* texto */}
                        <div className="flex flex-col  md:gap-[23xpx] lg:gap-[16px] justify-center">
                            <h1 className="text-4xl text-text font-bold md:text-[44px] md:tracking-[0.05rem] md:font-bold md:text-center md:leading-[48px] lg:text-[64px] lg:leading-[70px]">
                                Powerful Patient
                                <br />
                                <span className="text-primary">
                                    Experience.
                                </span>
                            </h1>
                            <p className="text-base font-normal lg:w-[580.04px] text-para md:text-base lg:text-lg leading-6 lg:leading-[27px] lg:tracking-tighter md:leading-[24px] md:tracking-[-0.01rem] md:text-center md:w-[516px]">
                                ConcertRx modernizes how pharmacies manage
                                workflow, medication waiting lists and patient
                                journeys by efficiently triggering SMS
                                notifications by dragging a card on a visual
                                interface or autonomously based on rules.
                            </p>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="flex flex-col gap-2 md:flex-row justify-center px-6">
                        <button className="bg-primary flex items-center w-[144px] text-white text-base font-medium px-[32px] py-[16px] lg:w-[208px] lg:h-[48px] md:w-[208px] md:h-[44px] md:py-[14px] rounded-3xl">
                            <Link>Try ConcertRX now</Link>
                        </button>
                        <button className="bg-transparent flex items-center justify-center w-[94px] text-primary text-base font-medium px-[32px] py-[16px] lg:w-[158px] lg:h-[48px] md:w-[158px] md:h-[44px] md:py-[14px] rounded-3xl  border-solid border-primary border">
                            <Link className="capitalize">View Pricing</Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* content of the page */}
            <section className="w-full bg-red-50 md:h-[613px] lg:h-[848px] md:mb-[64px] lg:mb-[96px]">
                <div className="w-full h-full items-center gap-[40px] flex flex-col mx-auto mb-[48px]">
                    <div className="flex flex-col items-center gap-5 ">
                        <div className="flex gap-2">
                            <img src={Like} alt="" />
                            <p className="capitalize text-xs text-text md:text-sm lg:text-sm font-medium leading-5">
                                its simple
                            </p>
                        </div>
                        {/* titulos */}
                        <div className="flex flex-col items-center justify-center gap-[18px]">
                            <h3 className=" text-3xl leading-[62px] tracking-tighter md:text-3xl  lg:text-5xl font-bold text-text text-center">
                                Easy to get started
                            </h3>
                            <p className="text-para text-[18px] lg:text-lg  text-center font-normal leading-[27px] tracking-tight">
                                We made ConcertRx easy to use. Like, really
                                easy.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center gap-5">
                        <div className="md:px-[90px] lg:px-0 flex items-center gap-5">
                            <div className="hidden flex-col items-center justify-center lg:block h-[145px] w-[175px]">
                                <div className="flex items-end justify-end ">
                                    <img
                                        src={Arrow1}
                                        alt=""
                                        className="h-[68.24px] w-[105.39px]"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-text text-sm font-medium">
                                        Smart Workflow
                                    </h4>
                                    <p className="text-xs text-para w-[175px] text-center leading-[14px]">
                                        Adding column of your choice makes it
                                        easier to manage the work.
                                    </p>
                                </div>
                            </div>
                            <img
                                src={EasyStart}
                                alt=""
                                className="md:w-[564px] lg:w-[842px] lg:h-[475px]"
                            />
                            <div className="hidden flex-col items-center justify-center lg:block h-[145px] w-[175px]">
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-text text-sm font-medium">
                                        Smart waiting list
                                    </h4>
                                    <p className="text-xs text-para w-[175px] text-center leading-[14px]">
                                        Sending text notifications to customers
                                        saves a lot of time.
                                    </p>
                                </div>
                                <div className="flex items-end justify-start mt-3">
                                    <img
                                        src={Arrow2}
                                        alt=""
                                        className="w-[102.63px] h-[66.53px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:gap-[32px] items-center justify-center w-[199px]">
                            <div className="flex justify-center">
                                <img
                                    src={Arrow3}
                                    alt=""
                                    className="w-[95px] h-[95px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h5 className="text-sm font-bold text-center w-full">
                                    Smart patient journeys
                                </h5>
                                <p className="font-normal text-sm text-para text-center lg:w-[199px]">
                                    Walk-in patients get notified by receiving
                                    text messages on each and every step.
                                </p>
                            </div>
                        </div>
                        {/* flechas */}
                        <div className=" flex lg:hidden">
                            <img
                                src={Arrow1}
                                alt=""
                                className="rotate-[-52deg] md:block lg:hidden hidden w-[54px] h-[34px]"
                            />
                            <div className="flex flex-col gap-6 md:flex-row p-4 lg:justify-center  md:w-[564px] justify-center md:justify-between">
                                <div className="flex flex-col items-center gap-2 lg:hidden">
                                    <h5 className="text-sm font-bold text-center">
                                        Smart Workflow
                                    </h5>
                                    <p className="font-normal text-sm text-para text-center">
                                        Adding column of your choice makes it
                                        easier to manage the work.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-2 lg:hidden">
                                    <h5 className="text-sm font-bold text-center">
                                        Smart Workflow
                                    </h5>
                                    <p className="font-normal text-sm text-para text-center">
                                        Adding column of your choice makes it
                                        easier to manage the work.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-2 lg:hidden">
                                    <h5 className="text-sm font-bold text-center">
                                        Smart Workflow
                                    </h5>
                                    <p className="font-normal text-sm text-para text-center">
                                        Adding column of your choice makes it
                                        easier to manage the work.
                                    </p>
                                </div>
                            </div>
                            <img
                                src={ArrowInv}
                                alt=""
                                className="hidden md:block lg:hidden sticky top-5 rotate-[52deg] w-[54px] h-[34px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* easy Section */}
            <section className="w-full lg:h-[628px] lg:mb-[96px] mx-auto px-4 md:px-6 lg:px-28">
                <div className="flex md:h-[380px] lg:h-[627px] gap-3 flex-col md:flex-row-reverse md:relative ">
                    <div className="w-full lg:h-full flex justify-center items-center bg-zinc-50 rounded-lg   ">
                        {/* tituto */}
                        <div className="flex flex-col lg:w-[405px] lg:h-[236px] items-center md:items-start gap-2.5">
                            <div className="bg-red-50 flex gap-2 justify-center items-center">
                                <img
                                    src={EasyWorkicon}
                                    alt="Easy Work"
                                    className="w-[20px] h-[18px]"
                                />
                                <p className="text-text text-xs text-center font-medium leading-4">
                                    {" "}
                                    Easy Work
                                </p>
                            </div>
                            <article className="flex flex-col gap-4 items-center lg:items-start">
                                <h1 className="text-text text-3xl leading-[58px] tracking-tighter text-center font-bold tracking-tights md:text-2xl lg:w-[306px] lg:text-[47px] lg:leading-[58px] lg:tracking-tighter lg:text-start">
                                    {" "}
                                    Easy Workflow Management
                                </h1>
                                <p className="text-para font-normal text-sm lg:text-base tracking-tight lg:w-[405px] leading-6 lg:text-start">
                                    ConcertRx modernizes how pharmacies manage
                                    workflow, medication waiting lists and
                                    patient journeys by efficiently triggering
                                    SMS notifications.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start">
                        <img
                            src={EasyWork}
                            alt=""
                            className="md:w-[360px] md:h-[204px] lg:w-[673px] lg:h-[381px] md:absolute lg:top-[122px] lg:left-1 sm:top-32 sm:left-48"
                        />
                    </div>
                </div>
            </section>
            {/* Patient Jorney */}
            <section className="w-full lg:h-[628px] lg:mb-[96px] mx-auto px-4 md:px-6 lg:px-28">
                <div className="flex md:h-[380px] lg:h-[627px] gap-3 flex-col md:flex-row md:relative ">
                    <div className="w-full lg:h-full flex justify-center items-center bg-zinc-50 rounded-lg   ">
                        {/* tituto */}
                        <div className="flex flex-col lg:w-[405px] lg:h-[236px] items-center md:items-start gap-2.5">
                            <div className=" flex gap-2 justify-center items-center">
                                <img
                                    src={ManageIcon}
                                    alt="Easy Work"
                                    className="w-[20px] h-[18px]"
                                />
                                <p className="text-text text-xs text-center font-medium leading-4">
                                    {" "}
                                    Manage Pharmacies
                                </p>
                            </div>
                            <article className="flex flex-col gap-4 items-center lg:items-start">
                                <h1 className="text-text text-3xl leading-[58px] tracking-tighter text-center font-bold tracking-tights md:text-2xl lg:w-[306px] lg:text-[41px] lg:leading-[58px] lg:tracking-tighter lg:text-start">
                                    {" "}
                                    Patient’s Journey Management
                                </h1>
                                <p className="text-para font-normal text-sm lg:text-base tracking-tight lg:w-[405px] leading-6 lg:text-start">
                                    ConcertRx modernizes how pharmacies manage
                                    workflow, medication waiting lists and
                                    patient journeys by efficiently triggering
                                    SMS notifications by dragging a card on a
                                    visual interface or autonomously based on
                                    rules.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start">
                        <img
                            src={EasyWork}
                            alt=""
                            className="md:w-[360px] md:h-[204px] lg:w-[673px] lg:h-[381px] md:absolute lg:top-[122px] lg:left-[552px] sm:top-32 sm:left-48"
                        />
                    </div>
                </div>
            </section>
            {/* Out of stock */}
            <section className="w-full lg:h-[628px] lg:mb-[96px] mx-auto px-4 md:px-6 lg:px-28">
                <div className="flex md:h-[380px] lg:h-[627px] gap-3 flex-col md:flex-row-reverse md:relative ">
                    <div className="w-full lg:h-full flex justify-center items-center bg-zinc-50 rounded-lg   ">
                        {/* tituto */}
                        <div className="flex flex-col lg:w-[405px] lg:h-[236px] items-center md:items-start gap-2.5">
                            <div className="flex gap-2 justify-center items-center">
                                <img
                                    src={MsgIcon}
                                    alt="Easy Work"
                                    className="w-[20px] h-[18px]"
                                />
                                <p className="text-text text-xs text-center font-medium leading-4">
                                    {" "}
                                    SMS. An easy, effective channel.
                                </p>
                            </div>
                            <article className="flex flex-col gap-4 items-center lg:items-start">
                                <h1 className="text-text text-3xl leading-[58px] tracking-tighter text-center font-bold tracking-tights md:text-2xl lg:w-[306px] lg:text-[47px] lg:leading-[58px] lg:tracking-tighter lg:text-start">
                                    {" "}
                                    Out of stocks?
                                </h1>
                                <p className="text-para font-normal text-sm lg:text-base tracking-tight lg:w-[405px] leading-6 lg:text-start">
                                    SMS. An easy, effective channel. With
                                    ConcertRx, you can effortlessly embed SMS
                                    notifications into your workflow, keeping
                                    your customers in the loop, happy and
                                    returning.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start">
                        <img
                            src={EasyWork}
                            alt=""
                            className="md:w-[360px] md:h-[204px] lg:w-[673px] lg:h-[381px] md:absolute lg:top-[122px] lg:left-1 sm:top-32 sm:left-48"
                        />
                    </div>
                </div>
            </section>
            {/* sliders */}
            <section className="flex flex-col items-center gap-11">
                <div className="flex flex-col items-center gap-[18px]">
                    <div className="flex flex-row">
                        <img src={Star} alt="" />
                        <p className="text-sm font-medium tracking-tight leading-5">
                            Trusted by over 1,000 customers
                        </p>
                    </div>
                    <h2 className="font-bold text-[28px] lg:text-5xl text-center tracking-[-0.15rem]">
                        {" "}
                        But don't take it from us…
                    </h2>
                </div>
                <Slider />
            </section>
            <section className="flex flex-col gap-6 items-center md:h-[519px] justify-center ">
                <div className="flex flex-col items-center gap-4 justify-center md:h-[271px] md:w-[630px]">
                    <div className=" flex gap-3 items-center">
                        <img src={Rayo} alt="" className="w-[10px] h-[18px]" />
                        <p>Lets Connect</p>
                    </div>
                    <h2 className="font-bold text-[28px] lg:text-5xl text-center tracking-tighter">
                        Ready to Make Music?
                    </h2>
                    <p className="text-base font-normal tracking-tighter text-para text-center">
                        Your success in this new era of pharmacy will be defined
                        by your ability to challenge outdated business processes
                        and ask what really works. You can either use a pen and
                        paper to manage an Ozempic waiting list or you can use
                        ConcertRx and save time, money and hair!.{" "}
                    </p>
                    <div className="flex flex-col gap-4">
                        <button className="flex flex-row items-start py-4 px-8 bg-primary rounded-3xl text-white font-medium text-sm">
                            <Link>Start for free</Link>
                        </button>
                        <p className="text-xs text-text">Get 50 credits now.</p>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default product
