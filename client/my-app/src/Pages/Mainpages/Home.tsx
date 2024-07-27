import Featured from "@/components/Comp/Carousel/Featured"
import Categories from "@/components/Comp/Categories"
import { DisplayItemsProps } from "@/components/Comp/DisplayItems"
import Footer from "@/components/Comp/Footer"
import Hero from "@/components/Comp/Hero"
import useCustomQuery from "@/components/Comp/hooks/useCustomQuery"
import Navbar from "@/components/Comp/Navbar"
import Newsletter from "@/components/Comp/Newsletter"
import Services from "@/components/Comp/services"
import { useEffect, useState } from "react"

function Home() {
   
  const [displayData, setDisplayData]  = useState<DisplayItemsProps>(); 

  const {data} = useCustomQuery('all'); 
  useEffect(() =>{
    setDisplayData(data); 
  }, [data])
  // console.log(displayData); 
  
  return (
    <>
    <Navbar/>
    <Hero 
        title = "Welcome to the CARTX"
        description = "This is CartX we provide the best of the solutions to our clients. Here you can find the best deals on different products including laptops, clothing items and tech items. Satisfaction of our clients is our foremost aim. "
    />
    <Categories/>
    <Featured items = {displayData?.items}/>
    <Services></Services>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default Home
