"use client";
import { useRef } from "react";
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
    type = "heading",
    ...props
}) => {
    const headingRef = useRef(null);
    const headingType = {
        primary: "!text-[70px] sm:text-4xl lg:text-custom-4xl",
        secondary: "text-6xl",
    };


    useEffect(() => {
        const headingSplit = SplitText.create(headingRef.current, {
            type: "chars, words,lines",
        });

        gsap.from(headingSplit.chars, {
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.3,
            // repeat: -1,
            // yoyo: true,
            // yPercent: "random([-100, 100])",
            // rotation: "random([-30, 30])",
            // x: -100,
            // from: "start"
            // aria: hidden,
            ScrollTrigger: {
                trigger: headingRef.current,
                start: "top top",
                end: "+=2000",
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
