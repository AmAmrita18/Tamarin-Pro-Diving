import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import guy1 from "../../assets/guide1.png";
import guy2 from "../../assets/guide2.png";
import guy3 from "../../assets/guide3.png";
import guy4 from "../../assets/guide4.png";
import icon1 from "../../assets/ico1.png"
import icon2 from "../../assets/ico2.png"
import icon3 from "../../assets/ico3.png"
import icon4 from "../../assets/ico4.png"
const TourGuide = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] h-full max-w-[1200px] mx-auto py-32">
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
        <div className="flex flex-row gap-5 mt-20">
          <div>
            <img src={guy1} alt="" />
          </div>
          <div className="relative">
            <img src={guy4} alt="" />
            <div className="absolute top-[150px] left-[30px]">
              <h1 className=" mt-6 text-[35px] mb-4 leading-[40.78px] text-white font-[700]">Oliver DADA</h1>
              <div className="flex flex-col gap-y-2">
                <ul className="flex items-center gap-2 text-[15px] text-white">
                  <li><img src={icon4} alt="" /></li>
                  <li>Director</li>
                </ul>
                <ul className="flex items-center gap-2 text-[15px] text-white">
                  <li><img src={icon3} alt="" /></li>
                  <li>PADI Diving Instructor</li>
                </ul>
                <div className="flex items-center gap-2">
                <ul className="flex items-center gap-2 text-[15px] text-white">
                  <li><img src={icon2} alt="" /></li>
                  <li>Skipper</li>
                </ul>
                <ul className="flex items-center gap-2 text-[15px] text-white">
                  <li><img src={icon1} alt="" /></li>
                  <li>Surfer</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={guy2} alt="" />
          </div>
          <div>
            <img src={guy3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
