"use client"
import React, { useRef } from 'react'

const SectionTwo = ({ sectionTwoRef }) => {

    return (
        <>
            <div  ref={sectionTwoRef} className='min-h-screen bg-purple pt-40'>
                <p className='text-6xl font-bold text-black text-center'>SectionTwo</p>
            </div>
            <div className='min-h-screen bg-amber-50'></div>
        </>
    )
}

export default SectionTwo