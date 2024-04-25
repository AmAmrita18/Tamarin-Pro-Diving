import React from 'react'
import WhyBG from "/WhyUsBG.png"
import image1 from "../../assets/Hotel.png"
import image2 from "../../assets/List-agenda.png"
import image3 from "../../assets/Plane-ticket.png"
import image4 from "../../assets/Destination.png"
const WhyUs = () => {
  return (
 <div>
       <div className='md:block hidden w-full'
    style={{
        backgroundImage: `url('${WhyBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition:"center"
      }}>
        <div className="w-[90%] flex flex-col max-w-[1200px] mx-auto md:py-20 py-16">
            <div className='flex md:flex-row flex-col gap-y-12 justify-between md:py-32 py-8'>
                <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                    <img src={image4} alt="" className='w-[110px] h-[90px]' />
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Experienced Guide</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Dive with confidence as our PADI-certified team brings years of expertise to your underwater adventure, ensuring safety and unforgettable memories beneath the waves.</p>
                </div>
                <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                    <img src={image3} alt="" className='w-[69px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Exceptional Dive Sites</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Discover Tamarin Bay's hidden treasures, from vibrant coral reefs to the unique weedy scorpionfish, all within a short boat ride from our shore-based center.</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col gap-y-12 justify-between py-32'>
                <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                    <img src={image2} alt="" className='w-[88px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Personalized Diving</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">We tailor every dive to your experience level, from first-time bubble makers to advanced open-water enthusiasts, promising a personalized journey into the deep.</p>
                </div>
                <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                    <img src={image1} alt="" className='w-[90px] h-[90px]'/>
                    <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Comprehensive Services</h1>
                    <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">From equipment rental to PADI courses, we provide everything under the sun for your diving needs, inclusive for both hotel guests and walk-in adventurers.</p>
                </div>
            </div>
        </div>
    </div>
     <div className='md:hidden w-full bg-[#022A3A]'
   >
         <div className="w-[90%] flex flex-col max-w-[1200px] mx-auto md:px-0 px-4 md:py-20 py-16">
         <h1 className="text-[#fff] md:hidden text-center my-6 md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
           Why Us
          </h1>
             <div className='flex md:flex-row flex-col gap-y-12 justify-between md:py-32 py-8'>
                 <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                     <img src={image4} alt="" className='w-[110px] h-[90px]' />
                     <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Experienced Guide</h1>
                     <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Dive with confidence as our PADI-certified team brings years of expertise to your underwater adventure, ensuring safety and unforgettable memories beneath the waves.</p>
                 </div>
                 <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                     <img src={image3} alt="" className='w-[69px] h-[90px]'/>
                     <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Exceptional Dive Sites</h1>
                     <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">Discover Tamarin Bay's hidden treasures, from vibrant coral reefs to the unique weedy scorpionfish, all within a short boat ride from our shore-based center.</p>
                 </div>
             </div>
             <div className='flex md:flex-row flex-col gap-y-12 justify-between md:py-32 py-8'>
                 <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                     <img src={image2} alt="" className='w-[88px] h-[90px]'/>
                     <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Personalized Diving</h1>
                     <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">We tailor every dive to your experience level, from first-time bubble makers to advanced open-water enthusiasts, promising a personalized journey into the deep.</p>
                 </div>
                 <div className='flex flex-col gap-y-4 items-center md:w-[32%]'>
                     <img src={image1} alt="" className='w-[90px] h-[90px]'/>
                     <h1 className="text-[32px] leading-[48px] font-[700] text-white text-center">Comprehensive Services</h1>
                     <p className="text-white px-4 text-center leading-[15.94px] font-[400] text-[14px]">From equipment rental to PADI courses, we provide everything under the sun for your diving needs, inclusive for both hotel guests and walk-in adventurers.</p>
                 </div>
             </div>
         </div>
     </div>
 </div>
  )
}

export default WhyUs