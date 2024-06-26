import Hero from '@/components/Comp/Hero'
import Navbar from '@/components/Comp/Navbar'
import React from 'react'


const Laptop: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Hero
          title='WELCOME TO THE LAPTOPS CATEGORY'
          description='Here you will the latest and the best laptops of different world class brands With affordable prices. The laptops available here are the best ones. Laptops are so designed that our customers can get the most out of their money.'
        />
    </div>
  )
}

export default Laptop
