import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react'
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';

const SectionThree = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#section3",
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
        <>
            <div id='section3' className='min-h-screen bg-blue-gradient  pt-40 relative z-10'>
                {/* <Heading variant='secondary' black center>SectionThree</Heading>
                <Paragraph center className="capitalize pt-10 max-w-[500px] my-10">Break apart HTML text into
                    characters, words, and/or lines for
                    easy animation.</Paragraph> */}
                <h2 className='text-[60px] text-bold text-center text-black'>SectionThree</h2>
            </div>
        </>
    )
}

export default SectionThree