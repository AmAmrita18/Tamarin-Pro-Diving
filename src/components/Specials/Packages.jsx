import React from "react";
import { PiArrowRightFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import image1 from "../../assets/package1.png";
import image2 from "../../assets/package2.png";
import image3 from "../../assets/pakagesImage.png";

import { GrLocation } from "react-icons/gr";

const Packages = () => {
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
          <div className="flex items-center justify-end w-[25%] gap-x-4">
            {" "}
            <p className="leading-[19.94px] text-[13px] font-[400] text-[#1A1A1A]">Explore our unique packages tailored for every diver’s dream. Discover something extraordinary with our diverse offerings.</p>
          </div>
        </div>

        <div className="flex py-20">
          <div className="w-[30%]">
            <img src={image2} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="w-[70%] pl-24 pt-10">
            <div className="flex flex-row gap-5">
            <button className="bg-[#011219] text-[14px] text-white font-[700] rounded-full px-7 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
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
                  Tamarin Bay, Mauritius
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
              Request Quote{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse pt-16">
          <div className="w-[30%]">
            <img src={image3} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="w-[70%] pr-24 pt-10">
          <div className="flex flex-row gap-5">
            <button className="bg-[#011219] text-[14px] text-white font-[700] rounded-full px-7 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
            <h1 className="text-[#1A1A1A] mt-6 text-[49px]  leading-[59.78px] font-[700]">
              Snorkeling Trips
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
                  Tamarin Bay, Mauritius
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Discover the wonders beneath the surface with our captivating
              Snorkeling Trips. Perfect for those who prefer to explore without
              diving, this experience welcomes non-divers to marvel at the
              underwater world from the safety of the surface. Gather a group of
              at least 5 persons for an unforgettable adventure. Please note,
              while we prioritize divers on our diving trips, we ensure a place
              for non-divers to enjoy the beauty of the sea. Join us and embark
              on a journey where the ocean's secrets await your discovery.{" "}
            </p>
            <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
              Request Quote{" "}
            </button>
          </div>
        </div>
        <div className="flex py-20">
          <div className="w-[30%]">
            <img src={image1} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="w-[70%] pl-24 pt-10">
          <div className="flex flex-row gap-5">
            <button className="bg-[#011219] text-[14px] text-white font-[700] rounded-full px-7 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] border-2 text-[14px] text-[#011219]  rounded-full px-7 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
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
                  Passe St Jacques
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Dive into the thrill of The Legendary Passe St Jacques, a haven
              for the daring. Experience the exhilaration of swimming alongside
              stingrays and the majestic, albeit elusive, sharks in their
              natural habitat. While these magnificent creatures have become
              rarities, the possibility of encountering them adds an element of
              surprise and adventure to every dive. Join us for an unforgettable
              journey into the heart of the ocean's mystery, where every moment
              is a discovery.
            </p>
            <button className="bg-[#011219] text-white  rounded-full px-16 py-3">
              Request Quote{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
