import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import image1 from "../../assets/package1.png";
import image2 from "../../assets/package2.png";
import { GrLocation } from "react-icons/gr";

const Package = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-32 pb-20">
        <div className="flex flow-row justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Package
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
              Diverse tailored Diving <br />
              Packages Crafted For You
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

        <div className="flex py-20">
          <div className="w-[30%]">
            <img src={image2} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="w-[70%] pl-24 pt-10">
            <h1 className="text-[#1A1A1A] mt-6 text-[49px]  leading-[59.78px] font-[700]">
              Underwater Wedding Proposal
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
              <div className="flex gap-4 items-center ml-14">
                <div>
                  <GrLocation className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                  3 hrs
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Dive into romance with our exclusive Underwater Wedding Proposal
              package. Let us orchestrate an unforgettable moment beneath the
              waves, tailored to your comfort and confidence level, whether
              you're a seasoned diver or a novice. Whether you envision an
              intimate affair for just you and your beloved or wish to share the
              magic with friends and family, we've got you covered. Say "yes" to
              a unique and unforgettable aquatic adventure, where love meets the
              depths of the ocean.
            </p>
            <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
              See detail{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse pt-16">
          <div className="w-[30%]">
            <img src={image1} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="w-[70%] pr-24 pt-10">
            <h1 className="text-[#1A1A1A] mt-6 text-[49px]  leading-[59.78px] font-[700]">
            The Legendary Passe St Jacques
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
              <div className="flex gap-4 items-center ml-14">
                <div>
                  <GrLocation className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <p className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                  3 hrs
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
            Dive into the thrill of The Legendary Passe St Jacques, a haven for the daring. Experience the exhilaration of swimming alongside stingrays and the majestic, albeit elusive, sharks in their natural habitat. While these magnificent creatures have become rarities, the possibility of encountering them adds an element of surprise and adventure to every dive. Join us for an unforgettable journey into the heart of the ocean's mystery, where every moment is a discovery.
            </p>
            <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
              See detail{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
