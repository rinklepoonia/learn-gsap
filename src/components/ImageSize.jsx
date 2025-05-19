"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ImageSize = () => {
    // const sectionRef = useRef(null);
    // const imageRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to("#increaseLength", {
                y: 300, 
                ease: "none",
                scrollTrigger: {
                    trigger: "#parent_section",
                    start: "top top",
                    end: "bottom top", 
                    scrub: true,
                    // pin: true,
                    markers: true, 
                },
            });
        },);

        return () => ctx.revert();
    }, []);
    return (
        <div  id='parent_section' className='max-w-[1180px] mx-auto  min-h-screen relative '>
            <div class=" h-[800px] overflow-hidden relative">
                <Image  id='increaseLength' className='object-cover rounded-2xl h-[790px] ' width={807} height={800} src="/assets/images/png/girl-with-nature.png" alt='room' />
            </div>
        </div>
    )
}

export default ImageSize