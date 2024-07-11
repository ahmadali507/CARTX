import DisplayItems, { DisplayItemsProps } from '@/components/Comp/DisplayItems'
import Footer from '@/components/Comp/Footer'
import Hero from '@/components/Comp/Hero'
import Navbar from '@/components/Comp/Navbar'
import Newsletter from '@/components/Comp/Newsletter'
import useCustomQuery from '@/components/Comp/hooks/useCustomQuery'
import { CardProps } from '@/components/ui/CustomCard'
import React, { useEffect, useState } from 'react'

const Clothes: React.FC =() => {
   
  const [displayData, setDisplayData] = useState<DisplayItemsProps | undefined>(); 
  const {data} = useCustomQuery('Clothes'); 
  console.log(data); 
  useEffect(()=>{
    setDisplayData(data); 
  }, [data]); 
  return (
    <div>
       <Navbar/>
        <Hero
          title='WELCOME TO THE CLOTHES CATEGORY'
          description='Here you will the latest and the best laptops of different world class brands With affordable prices. The laptops available here are the best ones. Laptops are so designed that our customers can get the most out of their money.'
        />
        <DisplayItems  items = {displayData?.items} brands = {displayData?.brands}/>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Clothes
