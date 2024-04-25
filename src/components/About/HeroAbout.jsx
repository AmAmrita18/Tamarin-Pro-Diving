import React from 'react'
import Header from '../Header'
import heroImage from "/AboutHero.png"
const HeroAbout = () => {
  return (
    <div className='w-full h-screen'
    style={{
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",
      backgroundPosition: "center",
    }}>
        <Header/>
        <div className='w-[90%] max-w-[1200px] mx-auto md:py-44 py-24'>
            <h1 className="font-[700] text-center md:text-[70px] text-[50px] text-white md:leading-[85.15px] leading-tight">About Us</h1>
            <p className="font-[400] text-center leading-[19.94px] text-[15px] text-white mt-12 w-[70%] mx-auto">Perfectly positioned in the heart of Tamarin Bay, our center is the pinnacle of diving in Mauritius. Join us to explore celebrated sites with top-tier professionals. From the warm waters to exceptional underwater visibility, every dive is an adventure. Your safety and joy are our mission. Dive in and be mesmerized by the ocean’s treasures.</p>
        </div>
    </div>
  )
}

export default HeroAbout