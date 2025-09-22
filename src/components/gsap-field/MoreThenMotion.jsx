"use client"
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

const MoreThenMotion = () => {
    // Refs for each part's content
    const part1Ref = useRef(null)
    const part2Ref = useRef(null)
    const part3Ref = useRef(null)
    const part4Ref = useRef(null)

    // Refs for h3 elements
    const h3Part1Ref = useRef(null)
    const h3Part2Ref = useRef(null)
    const h3Part3Ref = useRef(null)
    const h3Part4Ref = useRef(null)

    // Refs for sections (triggers)
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)

    useEffect(() => {
        // Prepare text splits for all h3 elements
        const textSplits = {
            part1: h3Part1Ref.current ? new SplitText(h3Part1Ref.current, { type: "chars" }) : null,
            part2: h3Part2Ref.current ? new SplitText(h3Part2Ref.current, { type: "chars" }) : null,
            part3: h3Part3Ref.current ? new SplitText(h3Part3Ref.current, { type: "chars" }) : null,
            part4: h3Part4Ref.current ? new SplitText(h3Part4Ref.current, { type: "chars" }) : null,
        }

        // Set initial states for text characters
        Object.values(textSplits).forEach(split => {
            if (split) {
                gsap.set(split.chars, { y: 50, opacity: 0 })
            }
        })

        // Function to show part with coordinated text animation
        const showPartWithText = (partRef, textSplit, duration = 0.6, delay = 0) => {
            const tl = gsap.timeline({ delay })

            // Show container
            tl.to(partRef, {
                opacity: 1,
                visibility: "visible",
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })

            // Animate text characters simultaneously
            if (textSplit) {
                tl.to(textSplit.chars, {
                    y: 0,
                    opacity: 1,
                    duration: 0.2,
                    stagger: 0.02,
                    // ease: "power2.out"
                }, "-=0.1") // Start text animation slightly before container finishes
            }

            return tl
        }

        // Function to hide part with coordinated text animation
        const hidePartWithText = (partRef, textSplit, yTarget = 50, duration = 0.3, delay = 0) => {
            const tl = gsap.timeline({ delay })

            // Hide text characters first
            if (textSplit) {
                tl.to(textSplit.chars, {
                    y: 10,
                    opacity: 0,
                    duration: 0.2,
                    stagger: 0.01,
                    ease: "power2.in"
                })
            }

            // Hide container
            tl.to(partRef, {
                opacity: 0,
                visibility: "hidden",
                y: yTarget,
                duration: duration,
                ease: "power2.in"
            }, "-=0.1") // Start container hide slightly before text finishes

            return tl
        }

        // Set initial states - all parts hidden initially
        gsap.set([part1Ref.current, part2Ref.current, part3Ref.current, part4Ref.current], {
            opacity: 0,
            visibility: "hidden",
            y: 50
        })

        // ScrollTrigger to show part1 when MoreThenMotion section is scrolled 10%
        ScrollTrigger.create({
            trigger: ".more-then-motion-container",
            start: "20% bottom",
            onEnter: () => {
                showPartWithText(part1Ref.current, textSplits.part1)
            },
            onLeaveBack: () => {
                hidePartWithText(part1Ref.current, textSplits.part1)
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
                showPartWithText(part2Ref.current, textSplits.part2, 0.8, 0.2)
            },
            onLeaveBack: () => {
                // Reverse: Show Part 1
                showPartWithText(part1Ref.current, textSplits.part1)
                // Hide Part 2
                hidePartWithText(part2Ref.current, textSplits.part2, 50, 0.2, 0.2)
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
                showPartWithText(part3Ref.current, textSplits.part3, 0.6, 0.2)
            },
            onLeaveBack: () => {
                // Reverse: Show Part 2
                showPartWithText(part2Ref.current, textSplits.part2)
                // Hide Part 3
                hidePartWithText(part3Ref.current, textSplits.part3, 50, 0.2, 0.2)
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
                showPartWithText(part4Ref.current, textSplits.part4, 0.6, 0.2)
            },
            onLeaveBack: () => {
                // Reverse: Show Part 3
                showPartWithText(part3Ref.current, textSplits.part3)
                // Hide Part 4
                hidePartWithText(part4Ref.current, textSplits.part4, 50, 0.2, 0.2)
            }
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='more-then-motion-container min-h-screen bg-[#ebe8db] pt-12 pb-[200px] relative z-20'>
            {/* Fixed Content Areas - Hidden initially to prevent flash on page load */}
            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 invisible' ref={part1Ref}>
                <div className='flex flex-col gap-4 relative z-10'>
                    <p className='font-normal text-sm uppercase text-black'>eene</p>
                    <h3 className='sm:text-5xl text-4xl text-black' ref={h3Part1Ref}>More then motion</h3>
                </div>
                <Image width={288} height={209} src="/assets/images/svg/wavy-line.svg" alt='wavy-line' className='absolute top-0 z-0' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 invisible' ref={part2Ref}>
                <div className='flex flex-col gap-4 relative z-10'>
                    <p className='font-normal text-sm uppercase text-black'>meeny</p>
                    <h3 className='sm:text-5xl text-4xl text-black' ref={h3Part2Ref}>A field of expression</h3>
                </div>
                <Image width={288} height={223} src="/assets/images/svg/eye-icon.svg" alt='eve-icon' className='absolute top-[-55%] left-[-20%] z-0' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 invisible' ref={part3Ref}>
                <div className='flex flex-col gap-4 relative z-10'>
                    <p className='font-normal text-sm uppercase text-black'>miny</p>
                    <h3 className='sm:text-5xl text-4xl text-black' ref={h3Part3Ref}>Build on GSAP</h3>
                </div>
                <Image width={288} height={223} src="/assets/images/svg/gsap-icon.svg" alt='gsap-icon' className='absolute top-[-45%] left-[-10%] z-0' />
            </div>

            <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 invisible' ref={part4Ref}>
                <div className='flex flex-col gap-4 relative z-10'>
                    <p className='font-normal text-sm uppercase text-black'>moe</p>
                    <h3 className='sm:text-5xl text-4xl text-black' ref={h3Part4Ref}>Rooted in real jov</h3>
                </div>
                <Image width={216} height={249} src="/assets/images/svg/smiley-icon.svg" alt='smiley-icon' className='absolute top-[-15%] right-[-10%] z-0' />
            </div>

            <div className='px-5 max-w-[1191px] mx-auto'>
                {/* PART 1 */}
                <div className='relative' ref={section1Ref}>
                    <div className='flex flex-wrap gap-2 justify-between md:mb-[300px] mb-[200px]'>
                        <p className='text-sm font-normal uppercase text-[#2A2119] max-w-[160px]'>scroll gently into that good field</p>
                        <p className='text-4xl text-[#2A2119] font-medium max-w-[577px]'
                        >Somewhere between the code and the grass, we found motion worth keeping —gentle, curious, and made with care.</p>
                    </div>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-[5%] max-sm:size-[250px]' src="/assets/images/webp/eating-biskuit.webp" alt='eating-biskuit' />
                    <Image width={269} height={323} className='rounded-xl object-cover ml-auto mr-[3%] md:mt-0 mt-[4%] max-sm:size-[200px]' src="/assets/images/webp/watch-time.webp" alt='watch-time' />
                    <Image width={158} height={158} className='rounded-xl object-cover md:ml-[30%] ml-[5%] md:mt-0 mt-[4%]' src="/assets/images/webp/watch.webp" alt='watch' />
                </div>

                {/* PART 2 */}
                <div className='relative md:mt-[170px] mt-[100px]' ref={section2Ref}>
                    <Image width={356} height={356} className='rounded-xl object-cover sm:ml-[4%] max-sm:mx-auto max-sm:size-[250px]' src="/assets/images/png/two-girls.png" alt='two-girls' />
                </div>


                {/* PART 3 */}
                <div className='relative md:mt-[430px] mt-[200px]' ref={section3Ref}>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-auto max-sm:size-[250px]' src="/assets/images/png/tent.png" alt='tent' />
                    <Image width={356} height={356} className='rounded-xl object-cover lg:mt-[-80px] mt-[4%] ml-[5%] max-sm:size-[250px]' src="/assets/images/png/flower.png" alt='flower' />
                    <Image width={158} height={158} className='rounded-xl object-cover md:mt-[95px] mt-[4%] ml-auto sm:mr-[15%] mr-[5%]' src="/assets/images/png/skelton.png" alt='flower' />
                </div>

                {/* PART 4 */}
                <div className='md:mt-[535px] mt-[200px] relative' ref={section4Ref}>
                    <Image width={306} height={187} className='rounded-xl object-cover mt-[95px] sm:ml-auto sm:mr-[15%] mr-auto ml-[4%] max-sm:size-[250px]' src="/assets/images/png/girl-eating-grass.png" alt='girl-eating-grass' />
                    <Image width={158} height={158} className='rounded-xl object-cover md:mt-[95px] mt-[4%] ml-[5%] max-sm:ml-auto' src="/assets/images/png/specs-boy.png" alt='specs-boy' />
                    <div className='md:mt-[70px]'>
                        <Image width={356} height={356} className='rounded-xl object-cover md:mt-[95px] mt-[4%] md:ml-auto ml-[4%] max-sm:size-[250px]' src="/assets/images/png/playing-chees.png" alt='playing-chees' />
                        <Image width={158} height={158} className='rounded-xl object-cover md:mt-[227px] mt-[4%] md:ml-[10%] ml-auto md:mr-0 mr-[2%]' src="/assets/images/png/see-through-lens.png" alt='see-through-lens' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreThenMotion