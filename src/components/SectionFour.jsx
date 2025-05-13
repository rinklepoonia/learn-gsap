import React, { useLayoutEffect } from 'react'
import Heading from './common/Heading'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const SectionFour = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#section4",
                start: "top top",
                end: "+=200%",
                scrub: true,
                markers: false,
                pin: true,
                pinSpacing: false,
            });
        },);
        return () => ctx.revert();
    }, []);
    return (
        <div>
            <div id='section4' className='min-h-screen bg-light-purple  pt-40 relative z-30'>
               <Heading variant='secondary' black  center>SectionFour</Heading>
            </div>
        </div>
    )
}

export default SectionFour