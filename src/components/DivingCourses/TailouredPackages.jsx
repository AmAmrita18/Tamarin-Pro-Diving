import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import site1 from "../../assets/site1.png";
import site2 from "../../assets/site2.png";
import site3 from "../../assets/site3.png";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { PiArrowsVerticalThin } from "react-icons/pi";
import img1 from "../../assets/Mask group (1).png"
import img2 from "../../assets/Mask group (2).png"
import img3 from "../../assets/Mask group (3).png"
import img4 from "../../assets/Mask group (4).png"
import img5 from "../../assets/Mask group (5).png"
import img6 from "../../assets/Mask group (6).png"
const TailouredPackages = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto py-32">
        <div className="flex flow-row justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[30px] leading-[26.59px] font-[700]">
              Tailored Packages
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
              Diverse Diving <br />
              Courses Curated For You{" "}
            </h1>
          </div>
          <div className="flex items-center justify-end w-[30%] gap-x-4">
            {" "}
            <p className="leading-[19.94px] text-[13px] font-[400] text-[#1A1A1A]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
              interdum habitant. Porttitor augue enim turpis maecenas et
              adipiscing. Dis ipsum vitae ultrices vulputate sem quis dui eu.
              Amet tincidunt est elementum.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-24 mt-20">
          <div>
            <div>
              <img src={img1} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                Bubblemaker – Try Dive
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    2m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  8-10yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Discover diving's joy with our Bubblemaker program for 8-10
                year-olds. Fun, safe underwater exploration in the pool or sea,
                up to 2m deep.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
                Explore{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img2} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                Initiation Dive
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    12m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  10+yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Dive into scuba in just one day! Learn basics in a pool, then
                the sea, under expert care. For swimmers, 10+, up to 12m deep.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
                Explore{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img3} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                PADI – Scuba Diver Course
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    12m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  10+yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Become a PADI Scuba Diver in just 3 days. With the PADI Scuba
                Diver course—learn theory, pool skills, and open water dives.
                For ages 10+, up to 12m.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3 ">
                Explore{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img4} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              PADI | Open Water 
Diver Course
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    18m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  10+yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Earn your PADI Open Water certification to dive globally. Includes theory, pool sessions, and ocean dives. For ages 10+, depth up to 18m.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3 mt-4">
                Explore{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img5} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              PADI – Advanced Open Water Diver
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    30m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  12+yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Advance your skills with the PADI Advanced Open Water course. Dive deeper and explore more, including wrecks. Ages 12+, up to 30m depth.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3 mt-4">
                Explore{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img6} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[27px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              PADI – Rescue Diver Course
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className="  flex ">
                  <GoDotFill className="w-[30px] h-[30px] text-[#42C9E6]" />

                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                  <GoDot className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flow-row ">
                  <div>
                    <PiArrowsVerticalThin className="w-[33px]" />
                  </div>
                  <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    18m
                  </p>
                </div>

                <h1 className="font-[700] leading-[26.69px] text-[23px]">
                  12+yo
                </h1>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Master rescue skills with the PADI Rescue Diver Course. Learn crisis prevention and response, enhancing safety and confidence. Ages 12+, up to 18m.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3 mt-4">
                Explore{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailouredPackages;
