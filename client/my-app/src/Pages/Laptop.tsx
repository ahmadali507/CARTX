import Hero from '@/components/Comp/Hero'
import Navbar from '@/components/Comp/Navbar'
import React from 'react'
import Axios from 'axios'
import useCustomQuery from '@/components/Comp/hooks/useCustomQuery'
import DisplayItems from '@/components/Comp/DisplayItems'

const Laptop: React.FC = () => {

   const {data} = useCustomQuery('Laptop'); 
   console.log(data); 

  return (
    <div>
        <Navbar/>
        <Hero
          title='WELCOME TO THE LAPTOPS CATEGORY'
          description='Here you will the latest and the best laptops of different world class brands With affordable prices. The laptops available here are the best ones. Laptops are so designed that our customers can get the most out of their money.'
        />
        <DisplayItems props = {data}/>
    </div>
  )
}

export default Laptop
