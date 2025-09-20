"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            "#logoOverlay",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power2.out" }
        );
        tl.to("#logoOverlay", {
            top: "2rem",
            duration: 1,
            ease: "power2.out",
        });
        tl.to(
            ["#logoOverlay", "#fadeLogo"],
            {
                top: "2rem",
                duration: 1,
                ease: "power2.out",
            },
            "<"
        );
        tl.to(".hero-container", {
            onComplete: () => {
                document.querySelector(".hero-container")?.classList.remove("bg-black");
            },
        });
        tl.to("#heroVideo", {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }, "<");

        // Pin the hero section during the MoreThenMotion scroll
        ScrollTrigger.create({
            trigger: ".hero-container",
            start: "top top",
            end: () => "+=" + (document.querySelector(".more-then-motion-container")?.offsetHeight || 4000),
            pin: true,
            pinSpacing: false,
            anticipatePin: 1
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <div className="hero-container bg-black min-h-screen flex relative z-10 overflow-hidden">
            <video
                id="heroVideo"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="/assets/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <Image id="fadeLogo"
                className="opacity-10 absolute top-1/2 left-8"
                width={300}
                height={310}
                src="/assets/images/svg/gsap-field-logo.svg"
                alt="gsap-field-logo"
            />
            <Image
                id="logoOverlay"
                className="opacity-100 absolute top-1/2 left-8"
                width={300}
                height={310}
                src="/assets/images/svg/gsap-field-logo.svg"
                alt="gsap-field-logo-overlay"
            />
        </div>
    );
};

export default Hero;
