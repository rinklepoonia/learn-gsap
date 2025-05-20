import { IMAGE_CHANGE_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const ImageChanging = () => {

    return (
        <div className='bg-black min-h-screen'>
            <div className='max-w-[1180px] px-5 mx-auto' >
                <div className='flex'>
                    <div className='w-[50%]'>
                        {IMAGE_CHANGE_DATA_LIST.map((obj, i) => (
                            <div key={i} className='flex justify-between gap-20'>
                                <Image src={obj.image} width={400} height={500} alt='change-image' className='max-w-[400px] w-full h-[500px] object-cover' />
                                <div>
                                    <p className='text-5xl md:text-7xl xl:text-custom-7xl leading-[91%] font-medium tracking-[-3px] text-white cursor-pointer transition-all duration-500 blur-[5px] hover:blur-none'>{obj.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageChanging