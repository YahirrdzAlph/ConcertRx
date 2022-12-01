import React from "react"
import { Link } from "react-router-dom"
import { Logo, Logo2, Location, Email } from "../assets/Icon"
import { Qr, Poligin } from "../assets/Icon"
const fotter = () => {
    return (
        <footer className="text-center lg:text-left text-gray-600">
            <div className="flex flex-col justify-center py-[40px] md:p-[40px] lg:py-[64px] lg:px-[189px] bg-green-200">
                <div>
                    <div className="flex justify-center">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="mx-6 py-10 text-center md:text-left">
                        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5 gap-8">
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className="uppercase font-extrabold flex  justify-start md:justify-start">
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
                                <h6 className="uppercase font-extrabold flex justify-start md:justify-start">
                                    Use Cases
                                </h6>
                                <div className=" flex flex-col gap-3">
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Ozempic Waiting List
                                        </a>
                                    </p>
                                    <p className="text-para text-[13px] font-medium">
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
                                <h6 className="uppercase font-extrabold flex justify-start md:justify-start">
                                    Useful links
                                </h6>
                                <div className="flex flex-col gap-3">
                                    <p className="text-para text-sm font-medium">
                                        <a href="#!" className="text-gray-600">
                                            Pricing
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font">
                                        <a href="#!" className="text-gray-600">
                                            Settings
                                        </a>
                                    </p>
                                    <p className="text-para text-sm font">
                                        <a href="#!" className="text-gray-600">
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="#!flex flex-col gap-7"
                                            className="text-gray-600"
                                        >
                                            Help
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-7 text-left">
                                <h6 className="uppercase font-extrabold flex justify-start md:justify-start">
                                    Contact
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
                            <div className="flex flex-col  gap-4 lg:gap-7 text-left">
                                <h6 className="uppercase font-extrabold flex justify-start md:justify-start">
                                    Contact
                                </h6>
                                <div className="flex items-center gap-2">
                                    <img src={Location} alt="" />
                                    <p className="flex items-center justify-start mb-4">
                                        Level 29/66-84 Goulburn St Sydney NSW
                                        2000
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <img
                                        src={Email}
                                        alt=""
                                        className="w-6 h-6"
                                    />
                                    <p className="flex items-center justify-center md:justify-start mb-4">
                                        finance@gigarx.capital
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>EULA</p>
                        <p>Security</p>
                        <p>Site Map</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>Powered by</p>
                        <img src={Logo2} alt="" />
                    </div>
                </div>
            </div>
            <div className="text-center p-4 flex flex-col mb-16 md:mb-8 lg:mb-20 items-center justify-center gap-9">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start lg:items-start gap-4 md:w-[648px] lg:w-[1000px]">
                    <div className=" flex flex-col items-start gap-4 w-full">
                        <h3 className="text-[28px] leading-9 text-text font-bold lg:w-[650px] lg:text-[40px]">
                            Want to receive product updates?{" "}
                        </h3>
                        <h5 className="text-xs text-start text-para md:w-[371px] md:h-[72px] lg:text-lg lg:w-[380px] lg:leading-7">
                            To opt-in to our text message update service.Text
                            YES to +61482 097 007 OR Scan the QR code. You can
                            send STOP to unsubscribe anytime.{" "}
                        </h5>
                    </div>
                    <div className="flex flex-col items-center bg-white">
                        <img src={Qr} alt="" />
                        <div className="w-full flex flex-col justify-center items-center">
                            <img src={Poligin} alt="" className="w-6 h-6" />
                            <div className="flex justify-center items-center py-2 w-full px2.5 bg-text rounded-b-xl">
                                <p className="uppercase text-white">Scan me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-[14px] text-para text-center lg:w-[1000px]">
                    Copyright © 2022 GigaRx Capital Pty Ltd and/or its
                    subsidiaries or affiliates. All Rights Reserved. ConcertRx,
                    ScriptCards, ShrinkMan, StoreOps and certain product names
                    used herein are trademarks or registered trademarks of
                    GigaRx Capital Pty Ltd and/or one of its subsidiaries or
                    affiliates in Australia and/or other countries. Any other
                    trademarks contained here in are the property of their
                    respective owners.
                </p>
            </div>
        </footer>
        // <footer classNameName="flex flex-col items-center py-16 px-40 gap-12 bg-slate-200">
        //   <div className="flex flex-col items-center gap-16 w-full h-full bg-slate-400">
        //     <img src={Logo} alt="" />
        //     <div className="flex items-start gap-8 w-full bg-red-100 h-[203px]">
        //       <div className="flex flex-col items-start gap-[30px]">
        //         <h4 className="text-text text-xl">Product</h4>
        //         <div className="flex flex-col items-start gap-3">
        //           <Link className="text-para font-medium text-sm">Login</Link>
        //           <Link className="text-para font-medium text-sm">Pricing</Link>
        //           <Link className="text-para font-medium text-sm">---</Link>
        //           <Link className="text-para font-medium text-sm">--</Link>
        //         </div>
        //       </div>
        //       <div className="flex flex-col items-start gap-[30px]">
        //         <h4 className="text-text text-xl">Use Cases</h4>
        //         <div className="flex flex-col items-start gap-3">
        //           <Link className="text-para font-medium text-sm">
        //             Ozempic Waiting List
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             Compounding Workflow
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             Vaccination Journey{" "}
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             Special Orders
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             Drug Journeys
        //           </Link>
        //         </div>
        //       </div>
        //       <div className="flex flex-col items-start gap-[30px]">
        //         <h4 className="text-text text-xl">Company</h4>
        //         <div className="flex flex-col items-start gap-3">
        //           <Link className="text-para font-medium text-sm">About Us</Link>
        //           <Link className="text-para font-medium text-sm">Pricing</Link>
        //           <Link className="text-para font-medium text-sm">FAQs</Link>
        //         </div>
        //       </div>
        //       <div className="flex flex-col items-start gap-[30px]">
        //         <h4 className="text-text text-xl">Product</h4>
        //         <div className="flex flex-col items-start gap-3">
        //           <Link className="text-para font-medium text-sm">
        //             Australia: 0482 097 007
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             United Kingdom: 07700 174007
        //           </Link>
        //         </div>
        //       </div>
        //       <div className="flex flex-col items-start gap-[30px]">
        //         <h4 className="text-text text-xl">Contact us</h4>
        //         <div className="flex flex-col items-start gap-3">
        //           <Link className="text-para font-medium text-sm">
        //             Level 29/66-84 Goulburn St Sydney NSW 2000
        //           </Link>
        //           <Link className="text-para font-medium text-sm">
        //             finance@gigarx.capital
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="flex flex-col items-center p-0 gap-8"></div>
        //   <div className="w-full h-full"></div>
        // </footer>
    )
}

export default fotter
