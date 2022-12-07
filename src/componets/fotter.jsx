import React from "react"
import { Link } from "react-router-dom"
import { Logo, Logo2, Location, Email } from "../assets/Icon"
import { Qr, Poligin } from "../assets/Icon"
import qr from "../assets/Img/Qrscan.svg"
import bg from "../assets/Img/bg.png"
const fotter = () => {
    return (
        <footer className="text-center lg:text-left text-gray-600">
            <div className="flex flex-col justify-center py-[40px] md:p-[40px] lg:py-[60px] md:h-[668px] lg:px-[165px] lg:h-[642px] bg-green-100">
                <div className="w-full h-full md:gap-8 lg:gap-16 flex flex-col">
                    <div className="flex justify-center">
                        <img
                            src={Logo}
                            alt=""
                            className="md:w-[170px] md:h-[59px] lg:w-[230px] lg:h-[80px]"
                        />
                    </div>
                    <div className="mx-6 text-center md:text-left">
                        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-footer gap-8">
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className="text-[20xp] font-extrabold flex justify-start md:justify-start">
                                    Product
                                </h6>
                                <div className="flex flex-col gap-3">
                                    <p className="text-para text-sm  font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Login
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Pricing
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            --
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            ---
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className=" text-[20xp] font-extrabold flex justify-start md:justify-start">
                                    Use Cases
                                </h6>
                                <div className=" flex flex-col gap-3">
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Ozempic Waiting List
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Compounding Workflows
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Vaccination Journey
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Special Orders
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font-mediums">
                                        <a href="#!" className="text-gray-600">
                                            Drug Journeys
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className="text-[20xp] font-extrabold flex justify-start md:justify-start">
                                    Company
                                </h6>
                                <div className="flex flex-col gap-3">
                                    <p className="text-para text-sm font-medium">
                                        <Link
                                            to={"/about"}
                                            className="text-gray-600"
                                        >
                                            About Us
                                        </Link>
                                    </p>
                                    <p className="text-para text-sm font">
                                        <a href="#!" className="text-gray-600">
                                            Carrers
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font">
                                        <a href="#!" className="text-gray-600">
                                            FAQs
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className="text-[20xp] font-extrabold flex justify-start md:justify-start">
                                    Support
                                </h6>
                                <div className="flex flex-col gap-3">
                                    <p className="font-medium text-sm text-para">
                                        <span className="text-text font-semibold">
                                            Australia:
                                        </span>{" "}
                                        0482 097 007
                                    </p>
                                    <p className="font-medium text-sm text-para">
                                        <span className="text-text font-semibold">
                                            United Kingdom:
                                        </span>{" "}
                                        07700 174007
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col  gap-2 lg:gap-7 text-left">
                                <h6 className=" font-extrabold flex justify-start md:justify-start">
                                    Contact us
                                </h6>
                                <div className="flex items-center gap-2">
                                    <img src={Location} alt="" />
                                    <p className="flex font-medium text-sm leading-5 text-zinc-700">
                                        Level 29/66-84 Goulburn St Sydney NSW
                                        2000
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={Email} alt="" />
                                    <p className="flex font-medium text-sm leading-5 text-zinc-700 underline">
                                        finance@gigarx.capital
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:gap-5 lg:gap-8">
                    <div className="flex flex-col md:flex-row items-center md:gap-3 lg:gap-5">
                        <Link to={"/policy"}>
                            <p>Privacy Policy</p>
                        </Link>
                        <p>|</p>
                        <Link to={"/terms"}>
                            <p>Terms and Conditions</p>
                        </Link>
                        <p>|</p>
                        <Link to={"/end-user"}>
                            <p>EULA</p>
                        </Link>
                        <p>|</p>
                        <Link to={"/security"}>
                            <p>Security</p>
                        </Link>
                        <p>|</p>
                        <Link>
                            <p>Site Map</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>Powered by</p>
                        <img src={Logo2} alt="" />
                    </div>
                </div>
            </div>
            <div className="text-center flex flex-col items-center lg:justify-center md:gap-[35px] lg:gap-[45px] md:h-[322px] lg:h-[463px] md:py-[32px]">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start lg:items-start gap-4 md:h-[142px] md:w-[648px] lg:w-[1062px]">
                    <div className=" flex flex-col items-start md:gap-[16px] lg:gap-[30px] md:w-[524px] lg:w-[906px] w-full">
                        <h3 className="text-[28px] leading-9 text-text text-start font-bold md:text-[24px] md:leading-[31px] lg:w-[650px] lg:text-[40px]">
                            Want to receive product updates?{" "}
                        </h3>
                        <h5 className="text-xs text-start text-para md:w-[371px] md:text-[16px] md:leading-6 md:h-[72px] lg:text-lg lg:w-[417px] lg:leading-7">
                            To opt-in to our text message update service. Text
                            YES to +61482 097 007 OR Scan the QR code. You can
                            send STOP to unsubscribe anytime.{" "}
                        </h5>
                    </div>
                    <div className="flex flex-col items-center lg:w-[140px] lg:h-[195px]">
                        <img src={qr} alt="" />
                    </div>
                </div>
                <p className="text-[14px] text-para text-center md:leading-[20px] md:w-[648px] lg:w-[1062px]">
                    Copyright © 2022 GigaRx Capital Pty Ltd and/or its
                    subsidiaries or affiliates. All Rights Reserved. ConcertRx,
                    ScriptCards, ShrinkMan, StoreOps and certain product names
                    used herein are trademarks or registered trademarks of
                    GigaRx Capital Pty Ltd and/or one of its subsidiaries or
                    affiliates in Australia and/or other countries. Any other
                    trademarks contained here in are the property of their
                    respective.
                </p>
            </div>
        </footer>
    )
}

export default fotter
