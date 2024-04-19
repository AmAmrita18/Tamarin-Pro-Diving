import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import site1 from "../../assets/site1.png";
import site2 from "../../assets/site2.png";
import site3 from "../../assets/site3.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const PopularSites = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto py-32">
        <div className="flex flow-row justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Popular Diving Sites
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
              Popular Diving Sites <br /> On the West Coast
            </h1>
          </div>
          <div className="flex items-center gap-x-4">
            {" "}
            <button className="text-[#1A1A1A] transition-all duration-700 ease-in-out  hover:scale-95 text-[20px] leading-[26.59px] font-[700]">
              See more
            </button>
            <div>
              <PiArrowRightFill className="w-7 h-7" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-16 py-20">
          <div>
            <div>
              <img src={site1} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[40px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                Passe St Jacques
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Advanced divers marvel at Passe St Jacques, a site where
                currents bring eagle rays, stingrays, and schools of tuna into
                view amidst stunning gorgonian fans and vivid corals.
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
                See detail{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={site2} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[40px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                Cathedral
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Dive into the Cathedral, a spectacle of arches and caves off
                Flic en Flac's coast. Here, advanced divers encounter lobsters
                and vibrant reef fish among stunning boulders and dramatic
                drop-offs.
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
                See detail{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={site3} alt="" className="w-[457px] h-[488px]" />
            </div>
            <div className="">
              <h1 className="text-[40px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
                Silvana
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p>
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
                Silvana beckons with serene turtle encounters for all diving
                levels in the tranquil waters of Black River bay, spanning
                depths from 5m to 18m.
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3 mt-4">
                See detail{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSites;
