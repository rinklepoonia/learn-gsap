"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
gsap.registerPlugin(SplitText);

export default function SplitTextAnimation() {



    return (

        <div className="min-h-screen pt-20">
            <div className="container mx-auto max-w-[1180px] px-5">
                {/* <h1 id="headingSplit" className="text-4xl text-center mt-20 text-orange-500  font-bold">
                    Welcome To Gsap Country
                </h1> */}
                <Heading center >Welcome To Gsap project</Heading>
                {/* <p ref={paraRef} id="paraSplit" className="text-xl text-green-400 font-medium text-center pt-10 capitalize">learn more about gsap</p> */}
                {/* <Paragraph green center className="capitalize pt-10 max-w-[500px]">Break apart HTML text into
                    characters, words, and/or lines for
                    easy animation.</Paragraph> */}
            </div>
        </div>

    );
}
