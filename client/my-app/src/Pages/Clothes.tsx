import Hero from '@/components/Comp/Hero'
import Navbar from '@/components/Comp/Navbar'
import useCustomQuery from '@/components/Comp/hooks/useCustomQuery'
import React from 'react'

const Clothes: React.FC =() => {
   
  const {data} = useCustomQuery('Clothes'); 
  console.log(data); 
  
  return (
    <div>
       <Navbar/>
        <Hero
          title='WELCOME TO THE CLOTHES CATEGORY'
          description='Here you will the latest and the best laptops of different world class brands With affordable prices. The laptops available here are the best ones. Laptops are so designed that our customers can get the most out of their money.'
        />
    </div>
  )
}

export default Clothes
