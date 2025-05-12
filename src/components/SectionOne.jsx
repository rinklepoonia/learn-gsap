"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);

const SectionOne = ({ sectionOneRef, sectionTwoRef }) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionOneRef.current,
                start: "top top",
                endTrigger: sectionTwoRef.current,
                end: "bottom -90%",
                scrub: true,
                markers: true,
                pin: true,
            });
        }, sectionOneRef);
        return () => ctx.revert();
    }, [sectionOneRef, sectionTwoRef]);
    // useEffect(() => {
    //     console.log(sectionOneRef.current);
    // }, []);
    return (
        <>
            <div ref={sectionOneRef} className='w-full h-screen relative z-[-10]'>
                <Image width={400} height={200} sizes='100vw' className='w-full h-full object-cover ' src="/assets/images/webp/om-bhudha.webp" alt='elephant' />
                <p className='text-6xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>Parallax Effect</p>
            </div>
        </>
    )
}

export default SectionOne