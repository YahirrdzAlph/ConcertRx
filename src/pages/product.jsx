import React from "react";
import { NavBar, Footer } from "../componets";
import { Link } from "react-router-dom";
import { Slider } from "../componets/Sliders";
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
} from "../assets/Icon";
const product = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      {/* Header of the page */}
      <section className="w-full bg-bgPrint h-[400px] md:h-[492px] lg:h-[700px] mb-[48px] mx-auto flex items-center justify-center">
        <div className=" md:w-[516px] md:h-[308px] lg:w-[624px] lg:h-[408px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <img src={Star} alt="" />
              <p className="text-xs font-medium text-para md:text-sm">
                Trusted by over 1,000 customers
              </p>
            </div>
            {/* texto */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl text-text font-bold md:text-5xl md:font-bold md:text-center lg:text-[64px]">
                Powerful Patient{" "}
                <span className="text-primary">Experience.</span>
              </h1>
              <p className="text-base font-normal text-para text-center md:text-base lg:text-lg leading-6 lg:leading-7 tracking-tighter">
                ConcertRx modernizes how pharmacies manage workflow, medication
                waiting lists and patient journeys by efficiently triggering SMS
                notifications by dragging a card on a visual interface or
                autonomously based on rules.
              </p>
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-4 md:flex-row md justify-center px-4">
              <button className="bg-primary text-white text-sm font-medium py-4 px-8 rounded-3xl">
                <Link>Try ConcertRX now</Link>
              </button>
              <button className="bg-transparent text-primary text-sm font-medium py-4 px-8 rounded-3xl  border-solid border-primary border">
                <Link>Try ConcertRX now</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* content of the page */}
      <section className="w-full h-full items-center gap-4 flex flex-col mx-auto mb-[48px]">
        <div className="flex gap-2">
          <img src={Like} alt="" />
          <p className="capitalize text-xs text-text md:text-sm lg:text-sm font-medium leading-5">
            its simple
          </p>
        </div>
        <h3 className=" text-3xl leading-7 md:text-3xl  lg:text-5xl font-bold text-text text-center">
          Easy to get started
        </h3>
        <p className="text-para text-base lg:text-lg  text-center font-normal leading-5">
          We made ConcertRx easy to use. Like, really easy.
        </p>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="md:px-[90px] lg:px-0 flex items-center">
            <div className="hidden flex-col items-end justify-center lg:block h-[144px] w-[175px]">
              <img src={Arrow1} alt="" />
              <div className="flex flex-col items-center justify-center">
                <h4>Smart Workflow</h4>
                <p>
                  Adding column of your choice makes it easier to manage the
                  work.
                </p>
              </div>
            </div>
            <img src={EasyStart} alt="" className="md:w-[564px]" />
            <div className="hidden flex-col items-end justify-center lg:block h-[144px] w-[175px]">
              <img src={Arrow2} alt="" />
              <div className="flex flex-col items-center justify-center">
                <h4>Smart Workflow</h4>
                <p>
                  Adding column of your choice makes it easier to manage the
                  work.
                </p>
              </div>
            </div>
          </div>
          {/* flechas */}
          <div className=" flex">
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
                  Adding column of your choice makes it easier to manage the
                  work.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 lg:hidden">
                <h5 className="text-sm font-bold text-center">
                  Smart Workflow
                </h5>
                <p className="font-normal text-sm text-para text-center">
                  Adding column of your choice makes it easier to manage the
                  work.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <img src={Arrow3} alt="" className="hidden lg:block" />
                <h5 className="text-sm font-bold text-center">
                  Smart Workflow
                </h5>
                <p className="font-normal text-sm text-para text-center">
                  Adding column of your choice makes it easier to manage the
                  work.
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
      </section>
      {/* easy Section
      <section className="w-full items-start h-[800px] mx-auto px-28">
        <div className="flex flex-col md:flex-row lg:flex-row-reverse">
          <div className="w-[624px] h-[627px] bg-zinc-50 rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-2.5 max-w-[405px]">
              <div className="flex items-center justify-center gap-2">
                <img src={EasyWorkicon} alt="" />
                <h3 className="text-text text-xs font-medium capitalize">
                  Easy Work
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-text font-bold text-3xl text-center md:text-start tracking-tighter ">
                  Easy Workflow Management
                </h1>
                <p className="text-base text-para tracking-tight font-normal leading-6 md:text-start">
                  ConcertRx modernizes how pharmacies manage workflows,
                  medication waiting lists, and patient journeys by efficiently
                  triggering SMS notifications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img src={EasyWork} alt="" />
          </div>
        </div>
      </section> */}
      {/* sliders */}
      <section className="flex flex-col items-center gap-11">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row">
            <img src={Star} alt="" />
            <p className="text-sm font-medium tracking-tight leading-5">
              Trusted by over 1,000 customers
            </p>
          </div>
          <h2 className="font-bold text-[28px] lg:text-5xl text-center tracking-tighter">
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
            Your success in this new era of pharmacy will be defined by your
            ability to challenge outdated business processes and ask what really
            works. You can either use a pen and paper to manage an Ozempic
            waiting list or you can use ConcertRx and save time, money and
            hair!.{" "}
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
  );
};

export default product;

{
  /* <div className="flex flex-col gap-5">
<div className="flex items-center justify-center gap-2 ">
  <img src={Star} alt="" className="h-4 w-4" />
  <p className="text-para text-xs ">
    Trusted by over 1,000 customers
  </p>
</div>
<h1 className="text-text font-bold text-4xl lg:text-6xl">
  Powerful Patien <br />
  <span className="text-primary">Experience.</span>
</h1>
<p className="text-para lg:text-lg font-normal text-base text-center">
  ConcertRx modernizes how pharmacies manage workflow, medication
  waiting lists, and patient journeys by efficiently triggering SMS
  notifications by dragging a card on a visual interface or
  autonomously based on rules.
</p>
</div> */
}
