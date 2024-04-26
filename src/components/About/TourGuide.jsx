import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import guy1 from "../../assets/guide1.png";
import guy2 from "../../assets/guide2.png";
import guy3 from "../../assets/guide3.png";
import guy4 from "../../assets/guide4.png";
import icon1 from "../../assets/ico1.png";
import icon2 from "../../assets/ico2.png";
import icon3 from "../../assets/ico3.png";
import icon4 from "../../assets/ico4.png";
const TourGuide = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] h-full max-w-[1200px] mx-auto md:px-0 px-4 md:py-32 py-16">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Tour Guide
            </h2>
            <h1 className="text-[#1A1A1A] md:block hidden mt-6  lg:text-[57px] md:text-[50px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
              Professional tour guide <br /> ready to guide your journey
            </h1>
            <h1 className="text-[#1A1A1A] md:hidden mt-6 md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
              Professional tour guide ready to guide your journey
            </h1>
          </div>
          <div className="flex md:mt-0 mt-5 items-center gap-x-4">
            {" "}
            <button className="text-[#1A1A1A] transition-all duration-700 ease-in-out  hover:scale-95 text-[20px] md:leading-[26.59px] leading-tight font-[700]">
              See more
            </button>
            <div>
              <PiArrowRightFill className="w-7 h-7" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:mt-20 mt-8">
          <div>
            <img src={guy1} alt="" />
          </div>
          <div className="relative">
            <img src={guy4} alt="" />
            <div className="absolute lg:top-[150px] lg:left-[30px] md:top-[200px] md:left-[80px] top-[10px] left-[20px]">
              <h1 className=" mt-6 md:text-[35px] text-[16px] md:mb-4 leading-[40.78px] text-white font-[700]">
                Oliver DADA
              </h1>
              <div className="flex flex-col gap-y-2">
                <ul className="flex items-center gap-2 md:text-[15px] text-[13px] text-white">
                  <li>
                    <img src={icon4} alt="" />
                  </li>
                  <li>Director</li>
                </ul>
                <ul className="flex items-center gap-2 md:text-[15px] text-[13px] text-white">
                  <li>
                    <img src={icon3} alt="" />
                  </li>
                  <li>PADI Diving Instructor</li>
                </ul>
                <div className="flex md:flex-row flex-col md:items-center  gap-2">
                  <ul className="flex items-center gap-2 md:text-[15px] text-[13px] text-white">
                    <li>
                      <img src={icon2} alt="" />
                    </li>
                    <li>Skipper</li>
                  </ul>
                  <ul className="flex items-center gap-2 md:text-[15px] text-[13px] text-white">
                    <li>
                      <img src={icon1} alt="" />
                    </li>
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
