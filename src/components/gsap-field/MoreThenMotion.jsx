import Image from 'next/image'
import React from 'react'

const MoreThenMotion = () => {
    return (
        <div className='min-h-screen bg-[#ebe8db] pt-12 pb-[200px]'>
            <div className='px-5 max-w-[1191px] mx-auto'>
                {/* PART 1 */}
                <div className='relative'>
                    <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-sm uppercase text-black'>eene</p>
                            <h3 className='text-5xl text-black'>More then motion</h3>
                        </div>
                        <Image width={288} height={209} src="/assets/images/svg/wavy-line.svg" alt='wavy-line' />
                    </div>
                    <div className='flex justify-between mb-[300px]'>
                        <p className='text-sm font-normal uppercase text-[#2A2119] max-w-[160px]'>scroll gently into that good field</p>
                        <p className='text-4xl text-[#2A2119] font-medium max-w-[577px]'
                        >Somewhere between the code and the grass, we found motion worth keeping —gentle, curious, and made with care.</p>
                    </div>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-[5%]' src="/assets/images/webp/eating-biskuit.webp" alt='eating-biskuit' />
                    <Image width={269} height={323} className='rounded-xl object-cover ml-auto mr-[3%]' src="/assets/images/webp/watch-time.webp" alt='watch-time' />
                    <Image width={158} height={158} className='rounded-xl object-cover ml-[30%]' src="/assets/images/webp/watch.webp" alt='watch' />
                </div>

                {/* PART 2 */}
                <div className='relative mt-[170px]'>
                    <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-sm uppercase text-black'>meeny</p>
                            <h3 className='text-5xl text-black'>A field of expression</h3>
                        </div>
                        <Image width={288} height={223} src="/assets/images/svg/eye-icon.svg" alt='eve-icon' />
                    </div>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-[7%]' src="/assets/images/png/two-girls.png" alt='two-girls' />
                </div>


                {/* PART 3 */}
                <div className='relative mt-[430px]'>
                    <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-sm uppercase text-black'>miny</p>
                            <h3 className='text-5xl text-black'>Build on GSAP</h3>
                        </div>
                        <Image width={288} height={223} src="/assets/images/svg/gsap-icon.svg" alt='gsap-icon' />
                    </div>
                    <Image width={356} height={356} className='rounded-xl object-cover ml-auto' src="/assets/images/png/tent.png" alt='tent' />
                    <Image width={356} height={356} className='rounded-xl object-cover mt-[-80px] ml-[7%]' src="/assets/images/png/flower.png" alt='flower' />
                    <Image width={158} height={158} className='rounded-xl object-cover mt-[95px] ml-auto mr-[15%]' src="/assets/images/png/skelton.png" alt='flower' />
                </div>

                {/* PART 4 */}
                <div className='mt-[535px] relarive'>
                    <div className='fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-normal text-sm uppercase text-black'>moe</p>
                            <h3 className='text-5xl text-black'>Rooted in real jov</h3>
                        </div>
                        <Image width={216} height={249} src="/assets/images/svg/smiley-icon.svg" alt='smiley-icon' />
                    </div>
                    <Image width={306} height={187} className='rounded-xl object-cover mt-[95px] ml-auto mr-[15%]' src="/assets/images/png/girl-eating-grass.png" alt='girl-eating-grass' />
                    <Image width={158} height={158} className='rounded-xl object-cover mt-[95px] ml-[5%]' src="/assets/images/png/specs-boy.png" alt='specs-boy' />
                    <div className='mt-[70px]'>
                        <Image width={356} height={356} className='rounded-xl object-cover mt-[95px] ml-[5%]' src="/assets/images/png/playing-chees.png" alt='playing-chees' />
                        <Image width={158} height={158} className='rounded-xl object-cover mt-[227px] ml-[10%]' src="/assets/images/png/see-through-lens.png" alt='see-through-lens' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreThenMotion