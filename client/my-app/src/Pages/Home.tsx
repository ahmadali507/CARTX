import Categories from "@/components/Comp/Categories"
import Footer from "@/components/Comp/Footer"
import Hero from "@/components/Comp/Hero"
import Navbar from "@/components/Comp/Navbar"
import Newsletter from "@/components/Comp/Newsletter"
import Services from "@/components/Comp/services"

function Home() {
 
  return (
    <>
    <Navbar/>
    <Hero 
        title = "Welcome to the CARTX"
        description = "This is CartX we provide the best of the solutions to our clients. Here you can find the best deals on different products including laptops, clothing items and tech items. Satisfaction of our clients is our foremost aim. "
    />
    <Categories/>
    <Services></Services>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default Home
