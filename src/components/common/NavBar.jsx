"use client";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import Icons from "./Icons";
import { NAV_LINK_LIST } from "@/utils/helper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const NavBar = () => {
    const [show, setShow] = useState(true);
    function showNav() {
        setShow(!show);
        if (show === true) {
            document.body.classList.add("max-lg:!overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:!overflow-hidden");
        }
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: "#nav_parent",
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true,
                // animation: tl,
                toggleActions: "play",
                duration: 2,
            })
            tl.from("#logo", {
                y: -200,
            })
                .from("#navList", {
                    y: -200,
                    stagger: 0.3,
                })
                .fromTo("#navBtn", {
                    scale: 0,
                    autoAlpha: 0,

                }, {
                    scale: 1,
                    autoAlpha: 1,
                }
                )
        })
        return () => ctx.revert();
    }, [])
    return (
        <div id="nav_parent" className="py-5 bg-black">
            <div className="container max-w-[1140px] xl:px-0 px-5 mx-auto">
                <div className="flex justify-between items-center ">
                    <a href="">
                        <p id="logo" className="text-white font-bold text-2xl">logo</p>
                    </a>
                    <ul
                        className={`flex items-center gap-4 xl:gap-6 max-lg:z-10 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-blue max-lg:w-full max-lg:h-screen duration-300 max-lg:bg-black max-lg:min-h-screen ${show ? "max-lg:translate-x-full" : "max-lg:translate-x-0"
                            }`}
                    >
                        {NAV_LINK_LIST.map((data, index) => (
                            <li id="navList" key={index}>
                                <Link
                                    onClick={showNav}
                                    href={data.url}
                                    className="text-white  hover:text-opacity-100 !leading-[115%] text-opacity-90 font-normal text-base duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-2 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] after:duration-300 "
                                >
                                    {data.link}
                                </Link>
                            </li>
                        ))}
                        <li className="max-sm:block hidden">
                            <button
                                onClick={showNav}
                                aria-label="contact us"
                                className="w-full gap-2 hover:bg-black duration-300 transition-all ease-linear group py-3.5 px-5 max-w-[154px] text-deep-blue rounded-[0px_50px_50px_40px] hover:text-white bg-white flex font-bold text-base items-center text-nowrap leading-[112%]"
                            >
                                Get Started
                                <span>
                                    <Icons icon="btn-arrow" />
                                </span>
                            </button>
                        </li>
                    </ul>
                    <div className="flex gap-4 items-center">
                        <button id="navBtn"
                            aria-label="contact us"
                            className=" w-full sm:flex gap-1 hover:bg-black hover:text-white transition-all ease-linear duration-300 group max-sm:hidden py-3 px-5 max-w-[154px] text-deep-blue rounded-[0px_50px_50px_40px] bg-white flex font-bold text-base items-center text-nowrap border border-solid border-transparent hover:border-white !leading-[112%]"
                        >
                            Get Started
                            <span>
                                <Icons icon="btn-arrow" />
                            </span>
                        </button>
                        <div
                            className="lg:hidden cursor-pointer pointer-events-auto"
                            onClick={showNav}
                        >
                            {show ? (
                                <div className="z-30 cursor-pointer relative">
                                    <Icons icon="menuIcon" />
                                </div>
                            ) : (
                                <div className="z-20 cursor-pointer relative">
                                    <Icons icon="crossIcon" />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default NavBar;