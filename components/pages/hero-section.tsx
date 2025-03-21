import React from 'react'
import { FlipWords } from '../ui/flip-words'

import { SampleHolderCanvas } from '../sample-holder'
import { heroTypeAnimationList } from '@/constants/main/hero-section'

const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between w-full h-screen'>
        <div className='flex flex-col w-full h-full items-center justify-center order-1 md:order-0'>
            <h1 className='text-6xl font-bold'>Trevin Lee</h1>
            <FlipWords
                words={heroTypeAnimationList}
                className='text-3xl font-bold'
            />
        </div>
        <div className='flex flex-col h-7/12 md:h-full w-full items-center justify-center'>
            <SampleHolderCanvas/>
        </div>
    </section>
  )
}

export default HeroSection