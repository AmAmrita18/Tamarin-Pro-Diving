import React from 'react'
import Header from '../Header'
import heroImage from "/SpecialsHero.png"

const HeroSpecials = () => {
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
            <h1 className="font-[700] text-center md:text-[70px] text-[50px] text-white md:leading-[85.15px] leading-tight">Packages</h1>
            <p className="font-[400] text-center leading-[19.94px] text-[15px] text-white mt-12 w-[70%] mx-auto">Unlock a world of underwater adventures with our curated dive packages. From serene snorkeling under starlit skies to thrilling dives in the legendary depths of Mauritius, each package is designed to offer a unique journey. Dive deep into your next great story with us.</p>
        </div>
    </div>
  )
}

export default HeroSpecials