"use client"
import { CONTENT_DATA_LIST } from '@/utils/helper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useLayoutEffect } from 'react';
import Paragraph from './common/Paragraph';
gsap.registerPlugin(ScrollTrigger);

const PinScroll = () => {
    useLayoutEffect(() => {
        let tx = gsap.context(() => {
            let zoomBox = gsap.timeline();
            ScrollTrigger.create({
                trigger: "#main_box",
                start: "top top",
                end: "+=2000",
                scrub: 1,
                duration: 2,
                animation: zoomBox,
                markers: false,
                pin: true,
                toggleActions: "play",
            });
            zoomBox.fromTo(
                "#zoomImg", {
                width: "0%",
                height: 0
            }, {
                width: "425px",
                height:"600px",
              
                duration: 3, 
            }
            );

            zoomBox.from(
                "#textLeft", {
                x: "-300%",
                stagger: 2,
            }
            );
            zoomBox.from(
                "#textRight", {
                x: "350%",
                stagger: 2,
            }
            );

        });
        return () => tx.revert();
    }, []);
    return (

            <div id='main_box' className='min-h-screen flex justify-center items-center bg-[#f5f5f5]'>
                <div className='container max-w-[1180px] px-5 mx-auto'>

                    <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-col gap-5'>
                            {CONTENT_DATA_LIST.map((obj, i) => (
                                <div key={i}>
                                    <p id='textLeft' className='text-lg text-black '>{obj}</p>
                                </div>
                            ))}
                        </div>
                        <Image id='zoomImg' className='object-cover' width={435} height={600} src="/assets/images/webp/room.webp" alt='room' />
                        <div className='flex flex-col gap-5'>
                            {CONTENT_DATA_LIST.map((obj, i) => (
                                <div key={i}>
                                    <p id='textRight' className='text-lg text-black '>{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
 
    )
}

export default PinScroll