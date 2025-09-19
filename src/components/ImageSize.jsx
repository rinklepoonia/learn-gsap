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
            gsap.fromTo("#increaseLength", 
                {
                    y: -100
                },

                {
                    y: 200,
                    scrollTrigger: {
                        trigger: "#parent_section",
                        start: "top 60%",
                        end: "bottom top",
                        scrub: true,
                        // pin: true,
                        markers: false,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);
    return (
        <div id='parent_section' className='max-w-[1180px] mx-auto  min-h-screen relative'>
            <h2 className='text-3xl text-black text-center pb-10'>IMAGE TRANSFORM</h2>
            <div className=" h-[800px] overflow-hidden relative ">
                <Image id='increaseLength' className='object-cover rounded-2xl absolute' width={807} height={800} src="/assets/images/png/girl-with-nature.png" alt='room' />
            </div>
        </div>
    )
}

export default ImageSize