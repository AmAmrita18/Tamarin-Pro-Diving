import React from 'react'
import { PiArrowRightFill } from "react-icons/pi";

const TourGuide = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] h-full max-w-[1200px] mx-auto py-32'>
        <div className="flex flow-row justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
                Tour Guide
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
            Professional tour guide <br /> ready to guide your journey
            </h1>
          </div>
          <div className="flex items-center gap-x-4">
            {" "}
            <button className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              See more
            </button>
            <div>
              <PiArrowRightFill className="w-7 h-7" />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default TourGuide