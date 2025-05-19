"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const SeeScroll = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // gsap.set("#outerText", {
            //     x: "100",

            // });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#seeView",
                    start: "top top",
                    end: "+=2700",
                    scrub: true,
                    markers: false,
                    pin: true,
                    pinSpacer: false,
                },
            });

            tl.from("#circle", {
                scale: 0.1,
                // opacity: 1,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from("#circleText", {
                    opacity: 0,
                    x: "100%",
                    duration: 2,
                })
                .to("#seeView", {
                    x: "-30%",
                    duration: 5,
                    delay: 5,
                })
                .from("#outerText", {
                    // x: 100,
                    duration: 2,
                });

        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="seeView" className="relative">
            <div

                className="w-full min-h-screen relative z-50 bg-see-view !bg-no-repeat bg-full  overflow-hidden"
            >
                {/* max-xl:max-w-[500px] max-xl:h-[500px] bg-[#964B00] rounded-full absolute bottom-[20%] right-[35%] */}


                <svg id="circle" className="absolute 2xl:right-[-1%] xl:right-[-16%] sm:right-[-22%] right-[-58%] 2xl:top-[18%] xl:top-[-4%] sm:top-[-14%] top-[-10%] opacity-100 xl:max-w-[1320px] lg:max-w-[1056px] max-w-[932px] min-h-[1166px] xl:min-h-[1300px]  rounded-full " xmlns="http://www.w3.org/2000/svg" width="1320" height="1250" viewBox="0 0 1265 1250">
                    <circle className="svg-circle blue-trans" cx="625" cy="625" r="625" fill="#0d76a5" />
                </svg>

                <p
                    id="circleText"
                    className="text-white font-medium sm:text-2xl text-lg sm:max-w-[450px] max-w-[300px] absolute 2xl:right-[19%] xl:right-[36%] sm:right-[27%] right-[8%]  top-1/2 opacity-100"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                    aliquid ipsa quos, ipsum dolores quas rem, suscipit, temporibus
                    necessitatibus eveniet ut. Ad optio exercitationem excepturi id, modi
                    asp ernatur accusamus alias.
                </p>
            </div>
            <p id="outerText" className="text-black  xl:text-3xl sm:text-xl text-base font-normal absolute top-1/2 2xl:right-[-24%] lg:right-[-31%] md:right-[-24%] sm:right-[-28%] right-[-30%] xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[150px] max-w-[105px] translate-x-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, fugit.</p>
        </div>
    );
};

export default SeeScroll;
