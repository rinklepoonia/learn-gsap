"use client";
import { useLayoutEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({
    children,
    className = "",
    center,
    right,
    white,
    green,
    black,
    variant = "default",
    type = "heading", scrub = false,
    ...props
}) => {
    const headingRef = useRef(null);
    const headingType = {
        primary: "!text-[70px] sm:text-4xl lg:text-custom-4xl",
        secondary: "text-6xl",
    };


    useLayoutEffect(() => {

        const headingSplit = SplitText.create(headingRef.current, {
            type: "chars, words,lines",
        });

        gsap.from(headingSplit.chars, {
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.2,
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 160",
                end: "+=2000",
                markers: false,
                scrub: scrub,
                toggleActions: "play reverse play reverse",
                // pin: true,
                
            },
        });

        return () => {
            headingSplit.revert();

        };
    }, []);


    return (
        <h2 ref={headingRef}
            {...props}
            className={`font-black  ${center ? "mx-auto text-center" : right ? "text-right" : "text-left"
                } ${headingType[variant] || headingType.primary} ${white
                    ? "text-white"
                    : black
                        ? "text-black"
                        : green
                            ? "text-green-200"
                            : "text-orange-400"
                }
 ${className}`}
        >
            {children}
        </h2>
    );
};

export default Heading;
// repeat: -1,
// yoyo: true,
// yPercent: "random([-100, 100])",
// rotation: "random([-30, 30])",
// x: -100,
// from: "start"
// aria: hidden,
