"use client"
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const MoreThenMotion = () => {
    // Refs for each part's content
    const part1Ref = useRef(null)
    const part2Ref = useRef(null)
    const part3Ref = useRef(null)
    const part4Ref = useRef(null)

    // Refs for sections (triggers)
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)

    useEffect(() => {
        // Set initial states - all parts hidden initially
        gsap.set([part1Ref.current, part2Ref.current, part3Ref.current, part4Ref.current], {
            opacity: 0,
            y: 50
        })

        // ScrollTrigger to show part1 when MoreThenMotion section is scrolled 10%
        ScrollTrigger.create({
            trigger: ".more-then-motion-container",
            start: "20% bottom",
            onEnter: () => {
                gsap.to(part1Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                })
            },
            onLeaveBack: () => {
                gsap.to(part1Ref.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.2,
                    ease: "power2.out"
                })
            }
        })

        // Animation for Part 1 to Part 2 transition
        ScrollTrigger.create({
            trigger: section1Ref.current,
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
                // Hide Part 1
                gsap.to(part1Ref.current, {
                    opacity: 0,
                    y: "-100%",
                    duration: 0.8,
                    ease: "power2.inOut"
                })
                // Show Part 2
                gsap.to(part2Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            },
            onLeaveBack: () => {
                // Reverse: Show Part 1
                gsap.to(part1Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.inOut"
                })
                // Hide Part 2
                gsap.to(part2Ref.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.2,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            }
        })

        // Animation for Part 2 to Part 3 transition
        ScrollTrigger.create({
            trigger: section2Ref.current,
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
                // Hide Part 2
                gsap.to(part2Ref.current, {
                    opacity: 0,
                    y: -50,
                    duration: 0.2,
                    ease: "power2.inOut"
                })
                // Show Part 3
                gsap.to(part3Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            },
            onLeaveBack: () => {
                // Reverse: Show Part 2
                gsap.to(part2Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.inOut"
                })
                // Hide Part 3
                gsap.to(part3Ref.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.2,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            }
        })

        // Animation for Part 3 to Part 4 transition
        ScrollTrigger.create({
            trigger: section3Ref.current,
            start: "bottom center",
            end: "bottom top",
            onEnter: () => {
                // Hide Part 3
                gsap.to(part3Ref.current, {
                    opacity: 0,
                    y: -50,
                    duration: 0.2,
                    ease: "power2.inOut"
                })
                // Show Part 4
                gsap.to(part4Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            },
            onLeaveBack: () => {
                // Reverse: Show Part 3
                gsap.to(part3Ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.inOut"
                })
                // Hide Part 4
                gsap.to(part4Ref.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.2,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
            }
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='more-then-motion-container min-h-screen bg-[#ebe8db] pt-12 pb-[200px] relative z-20'>
            {/* Fixed Content Areas - Outside of sections to avoid positioning issues */}
            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10' ref={part1Ref}>
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-sm uppercase text-black'>eene</p>
                    <h3 className='text-5xl text-black'>More then motion</h3>
                </div>
                <Image width={288} height={209} src="/assets/images/svg/wavy-line.svg" alt='wavy-line' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10' ref={part2Ref}>
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-sm uppercase text-black'>meeny</p>
                    <h3 className='text-5xl text-black'>A field of expression</h3>
                </div>
                <Image width={288} height={223} src="/assets/images/svg/eye-icon.svg" alt='eve-icon' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10' ref={part3Ref}>
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-sm uppercase text-black'>miny</p>
                    <h3 className='text-5xl text-black'>Build on GSAP</h3>
                </div>
                <Image width={288} height={223} src="/assets/images/svg/gsap-icon.svg" alt='gsap-icon' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10' ref={part4Ref}>
                <div className='flex flex-col gap-4'>
                    <p className='font-normal text-sm uppercase text-black'>moe</p>
                    <h3 className='text-5xl text-black'>Rooted in real jov</h3>
                </div>
                <Image width={216} height={249} src="/assets/images/svg/smiley-icon.svg" alt='smiley-icon' />
            </div>

            <div className='px-5 max-w-[1191px] mx-auto'>
                {/* PART 1 */}
                <div className='relative' ref={section1Ref}>
                    <div className='flex flex-wrap gap-2 justify-between md:mb-[300px] mb-[200px]'>
                        <p className='text-sm font-normal uppercase text-[#2A2119] max-w-[160px]'>scroll gently into that good field</p>
                        <p className='text-4xl text-[#2A2119] font-medium max-w-[577px]'
                        >Somewhere between the code and the grass, we found motion worth keeping —gentle, curious, and made with care.</p>
                    </div>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-[5%]' src="/assets/images/webp/eating-biskuit.webp" alt='eating-biskuit' />
                    <Image width={269} height={323} className='rounded-xl object-cover ml-auto mr-[3%] md:mt-0 mt-[4%]' src="/assets/images/webp/watch-time.webp" alt='watch-time' />
                    <Image width={158} height={158} className='rounded-xl object-cover ml-[30%] md:mt-0 mt-[4%]' src="/assets/images/webp/watch.webp" alt='watch' />
                </div>

                {/* PART 2 */}
                <div className='relative md:mt-[170px] mt-[100px]' ref={section2Ref}>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-[4%]' src="/assets/images/png/two-girls.png" alt='two-girls' />
                </div>


                {/* PART 3 */}
                <div className='relative md:mt-[430px] mt-[200px]' ref={section3Ref}>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-auto' src="/assets/images/png/tent.png" alt='tent' />
                    <Image width={356} height={356} className='rounded-xl object-cover md:mt-[-80px] mt-[4%] ml-[5%]' src="/assets/images/png/flower.png" alt='flower' />
                    <Image width={158} height={158} className='rounded-xl object-cover md:mt-[95px] mt-[4%] ml-auto mr-[15%]' src="/assets/images/png/skelton.png" alt='flower' />
                </div>

                {/* PART 4 */}
                <div className='md:mt-[535px] mt-[200px] relative' ref={section4Ref}>
                    <Image width={306} height={187} className='rounded-xl object-cover mt-[95px] ml-auto mr-[15%]' src="/assets/images/png/girl-eating-grass.png" alt='girl-eating-grass' />
                    <Image width={158} height={158} className='rounded-xl object-cover md:mt-[95px] mt-[4%] ml-[5%]' src="/assets/images/png/specs-boy.png" alt='specs-boy' />
                    <div className='md:mt-[70px]'>
                        <Image width={356} height={356} className='rounded-xl object-cover md:mt-[95px] mt-[4%] ml-[4%]' src="/assets/images/png/playing-chees.png" alt='playing-chees' />
                        <Image width={158} height={158} className='rounded-xl object-cover md:mt-[227px] mt-[4%] md:ml-[10%] ml-auto md:mr-0 mr-[3%]' src="/assets/images/png/see-through-lens.png" alt='see-through-lens' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreThenMotion