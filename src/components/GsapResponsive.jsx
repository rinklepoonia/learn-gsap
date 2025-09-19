"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const GsapResponsive = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            ScrollTrigger.matchMedia({
                "(min-width:768px)": () => {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#parent",
                            start: "top top",
                            end: "+=3000",
                            markers: false,
                            // animation: tl,
                            scrub: true,
                            toggleActions: "play",
                            pin: true,
                        }
                    })
                    tl.to("#desktopScreen", {
                        scale: 2,
                        rotation: 360,
                    })
                        .to("#desktopScreen", {
                            scale: 1,
                            backgroundColor: "#ffffff",
                            // color: "#FF0000"
                        }

                        )
                },

                "(max-width:768px)": () => {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#parent",
                            start: "top top",
                            end: "+=3000",
                            markers: true,
                            // animation: tl,
                            scrub: true,
                            toggleActions: "play",
                            pin: true,
                        }
                    })
                    tl.to("#mobileScreen", {
                        scale: 1.5,
                        rotation: 360,
                    })
                        .to("#mobileScreen", {
                            scale: 1,
                            backgroundColor: "#FFFF00",
                            color: "#FF0000"
                        }

                        )
                },

            })


        })
        return () => ctx.revert()
    }, [])

    return (
        <div id='parent' className=' bg-black min-h-screen flex  justify-center items-center'>
            <div className='container max-w-[1180px] mx-auto px-5'>
                <div className='flex flex-wrap gap-20 items-center md:justify-between justify-center'>
                    <p id='mobileScreen' className='text-xl font-bold text-black w-[300px] h-[200px] bg-purple-300 rounded-xl text-center py-5'>MObile</p>
                    <p id='desktopScreen' className='text-xl font-bold text-black w-[300px] h-[200px] bg-green-500 rounded-xl text-center py-5'>desktop</p>
                </div>
            </div>
        </div>
    )
}

export default GsapResponsive