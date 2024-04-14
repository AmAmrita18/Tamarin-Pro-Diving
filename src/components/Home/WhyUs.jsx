import React from 'react'
import WhyBG from "/WhyUsBG.png"
import image1 from "../../assets/Hotel.png"
import image2 from "../../assets/List-agenda.png"
import image3 from "../../assets/Plane-ticket.png"
import image4 from "../../assets/Destination.png"
const WhyUs = () => {
  return (
    <div className='w-full'
    style={{
        backgroundImage: `url('${WhyBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition:"center"
      }}>
        <div className="w-[90%] max-w-[1200px] mx-auto py-20">
            <div className='flex justify-between py-32'>
                <div className='flex flex-col gap-y-4 items-center w-[32%]'>
                    <img src={image4} alt="" className='w-[110px] h-[90px]' />
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Experienced Guide</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Dive with confidence as our PADI-certified team brings years of expertise to your underwater adventure, ensuring safety and unforgettable memories beneath the waves.</p>
                </div>
                <div className='flex flex-col gap-y-4 items-center w-[32%]'>
                    <img src={image3} alt="" className='w-[69px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Exceptional Dive Sites</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Discover Tamarin Bay's hidden treasures, from vibrant coral reefs to the unique weedy scorpionfish, all within a short boat ride from our shore-based center.</p>
                </div>
            </div>
            <div className='flex justify-between py-32'>
                <div className='flex flex-col gap-y-4 items-center w-[32%]'>
                    <img src={image2} alt="" className='w-[88px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Personalized Diving</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">We tailor every dive to your experience level, from first-time bubble makers to advanced open-water enthusiasts, promising a personalized journey into the deep.</p>
                </div>
                <div className='flex flex-col gap-y-4 items-center w-[32%]'>
                    <img src={image1} alt="" className='w-[90px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Comprehensive Services</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">From equipment rental to PADI courses, we provide everything under the sun for your diving needs, inclusive for both hotel guests and walk-in adventurers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs