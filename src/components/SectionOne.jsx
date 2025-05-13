"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let parallax = gsap.timeline();
            ScrollTrigger.create({
                trigger: "#section1",
                start: "top top",
                end: "+=200%",
                scrub: true,
                duration: 2,
                markers: false,
                pin: true,
                pinSpacing: false,
                animation: parallax,
                onEnter: () => gsap.to("#parallaxText", { opacity: 1, y: -300, scale: 2 }),
                onLeaveBack: () => gsap.set("#parallaxText", { opacity: 0, y: 0, scale: 0 }),
            });

        },);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div id='section1' className='w-full h-screen  z-[-10]'>
                <Image width={400} height={200} sizes='100vw' className='w-full h-full object-cover ' src="/assets/images/webp/om-bhudha.webp" alt='elephant' />
                <p id='parallaxText' className='text-6xl opacity-0 font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>Parallax Effect</p>
            </div>
        </>
    )
}

export default SectionOne