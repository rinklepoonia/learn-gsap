"use client"
import React, { useRef } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const ParallaxEffect = () => {
    const sectionTwoRef = useRef(null);
    const sectionOneRef = useRef(null);
    return (
        <div>
            <SectionOne sectionOneRef={sectionOneRef} sectionTwoRef={sectionTwoRef} />
            <SectionTwo sectionTwoRef={sectionTwoRef} />
            {/* <SectionOne /> */}
        </div>
    )
}

export default ParallaxEffect