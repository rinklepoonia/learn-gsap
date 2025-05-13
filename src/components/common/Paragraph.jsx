"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";
const Paragraph = ({ children, className = "", green, white, center, animateLines = false, ...props }) => {
    const paraRef = useRef(null);
    useEffect(() => {
        const paraSplit = SplitText.create(paraRef.current, {
            type: "chars, words,lines",
        });
        const target = animateLines ? paraSplit.lines : paraSplit.words;
        gsap.from(target, {
            x: 100,
            autoAlpha: 0,
            // repeat: -1,
            // yoyo: true,
            stagger: {
                each: 0.1,
            },
            duration: 0.3,
            scrub: 1,
        });

        return () => {
            paraSplit.revert();
        };
    }, [animateLines]);
    return (
        <p ref={paraRef}
            {...props}
            className={`${white ? "text-white" : green ? "text-green-400" : "text-purple-400"
                }  ${center ? "mx-auto text-center" : right ? "text-right" : "text-left"
                } ${className} text-2xl font-medium `}
        >
            {children}
        </p>
    );
};

export default Paragraph;
