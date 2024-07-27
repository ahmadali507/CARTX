import { CardProps } from '@/components/ui/CustomCard'
import React from 'react'
import Carousel from './Carousel'
import MainCarousel from './MainCarousel'
import { Typewriter } from 'react-simple-typewriter'


const Featured = ({items} : {items: CardProps[] | undefined} ) => {
  return (
    <div className='bg-black py-20 border-b-2 border-slate-600'>
        <h1 className='text-6xl text-white font-bold text-center '>
        <Typewriter
                words={['FEATURED AND EXCLUSIVE PRODUCTS']}
                loop={
                    false
                }
                cursor
                cursorStyle='!'
                typeSpeed={20}
                deleteSpeed={0}
                delaySpeed={10000}
                
              />
        </h1>
        <div className = "bg-black w-[90%] m-auto py-10">
        <MainCarousel items = {items}/>
        </div>
    </div>
  )
}

export default Featured
