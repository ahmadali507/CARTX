import Hero from '@/components/Comp/Hero'
import Navbar from '@/components/Comp/Navbar'
import React, { useEffect, useState } from 'react'
import useCustomQuery from '@/components/Comp/hooks/useCustomQuery'
import DisplayItems from '@/components/Comp/DisplayItems'
import { CardProps } from '@/components/ui/CustomCard'
import Newsletter from '@/components/Comp/Newsletter'
import Footer from '@/components/Comp/Footer'

const Laptop: React.FC = () => {

  
   const [displayData, setDisplayData]  = useState<CardProps[]>(); 

   const {data} = useCustomQuery('Laptop'); 
   console.log(data); 
   useEffect(() =>{
     setDisplayData(data); 
   }, [data])

  return (
    <div>
        <Navbar/>
        <Hero
          title='WELCOME TO THE LAPTOPS CATEGORY'
          description='Here you will the latest and the best laptops of different world class brands With affordable prices. The laptops available here are the best ones. Laptops are so designed that our customers can get the most out of their money.'
        />
        <DisplayItems items = {displayData}/>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Laptop
