"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react'
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
gsap.registerPlugin(ScrollTrigger);
const SectionTwo = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#section2",
                start: "top top",
                end: "+=200%",
                scrub: true,
                markers: true,
                pin: true,
                pinSpacing: false,
            });
        },);
        return () => ctx.revert();
    }, []);
    return (
        <>
            <div id='section2' className='min-h-screen bg-purple pt-40'>
                {/* <Heading  variant='secondary' green center>SectionTwo</Heading> */}
                <h2 className='text-[60px] text-bold text-center text-black'>SectionTwo</h2>

            </div>
        </>
    )
}

export default SectionTwo