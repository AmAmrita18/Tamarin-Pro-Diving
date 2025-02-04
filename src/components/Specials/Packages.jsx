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
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 md:pt-32 md:pb-20 pt-16 pb-8">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Package
            </h2>
            <h1 className="text-[#1A1A1A] md:block hidden mt-6  lg:text-[57px] md:text-[50px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
              Diverse tailored Diving <br />
              Packages Crafted For You
            </h1>
            <h1 className="text-[#1A1A1A] md:hidden mt-6 md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
              Diverse tailored Diving
              Packages Crafted For You
            </h1>
          </div>
          <div className="flex items-center justify-end md:w-[25%] md:mt-0 mt-5 gap-x-4">
            {" "}
            <p className="leading-[19.94px] text-[13px] font-[400] text-[#1A1A1A]">Explore our unique packages tailored for every diver’s dream. Discover something extraordinary with our diverse offerings.</p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:py-20 py-8">
          <div className="lg:w-[30%] md:w-[40%]">
            <img src={image2} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="lg:w-[70%] md:w-[60%] lg:pl-24 md:pl-6 pt-10">
            <div className="flex flex-row md:gap-5 gap-2">
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 md:text-[14px] text-[10px] text-white font-[700] rounded-full md:px-7 px-3 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
            <h1 className="text-[#1A1A1A] mt-6 md:text-[49px] text-[30px] md:leading-[59.78px] leading-tight font-[700]">
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
              <div className="flex gap-4 items-center md:ml-14">
                <div>
                  <GrLocation className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <p className="leading-[19.94px] md:text-[20px] text-[16px] font-[700] text-[#1A1A1A]">
                  Tamarin Bay, Mauritius
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] md:my-10 my-5 leading-[15.94px] font-[400] text-[14px]">
              Dive into romance with our exclusive Underwater Wedding Proposal
              package. Let us orchestrate an unforgettable moment beneath the
              waves, tailored to your comfort and confidence level, whether
              you're a seasoned diver or a novice. Whether you envision an
              intimate affair for just you and your beloved or wish to share the
              magic with friends and family, we've got you covered. Say "yes" to
              a unique and unforgettable aquatic adventure, where love meets the
              depths of the ocean.
            </p>
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
              Request Quote{" "}
            </button>
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col md:pt-16 pt-8">
          <div className="lg:w-[30%] md:w-[40%]">
            <img src={image3} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="lg:w-[70%] md:w-[60%] lg:pr-24 md:pr-6 pt-10">
          <div className="flex flex-row md:gap-5 gap-2">
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 md:text-[14px] text-[10px] text-white font-[700] rounded-full md:px-7 px-3 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
            <h1 className="text-[#1A1A1A] mt-6 md:text-[49px] text-[30px] md:leading-[59.78px] leading-tight font-[700]">
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
              <div className="flex gap-4 items-center md:ml-14">
                <div>
                  <GrLocation className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <p className="leading-[19.94px] md:text-[20px] text-[16px] font-[700] text-[#1A1A1A]">
                  Tamarin Bay, Mauritius
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] md:my-10 my-5 leading-[15.94px] font-[400] text-[14px]">
              Discover the wonders beneath the surface with our captivating
              Snorkeling Trips. Perfect for those who prefer to explore without
              diving, this experience welcomes non-divers to marvel at the
              underwater world from the safety of the surface. Gather a group of
              at least 5 persons for an unforgettable adventure. Please note,
              while we prioritize divers on our diving trips, we ensure a place
              for non-divers to enjoy the beauty of the sea. Join us and embark
              on a journey where the ocean's secrets await your discovery.{" "}
            </p>
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
              Request Quote{" "}
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:py-20 py-16">
          <div className="lg:w-[30%] md:w-[40%]">
            <img src={image1} alt="" className="w-[457px] h-[458px]" />
          </div>

          <div className="lg:w-[70%] md:w-[60%] lg:pl-24 md:pl-6 pt-10">
          <div className="flex flex-row md:gap-5 gap-2">
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 md:text-[14px] text-[10px] text-white font-[700] rounded-full md:px-7 px-3 py-1">
              Basic Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Mid Packages{" "}
            </button>
            <button className="border-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 border-2 md:text-[14px] text-[10px] text-[#011219]  rounded-full md:px-7 px-3 py-1 font-[700]">
              Super Packages{" "}
            </button>
            </div>
            <h1 className="text-[#1A1A1A] mt-6 md:text-[49px] text-[30px]  md:leading-[59.78px] leading-tight font-[700]">
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
              <div className="flex gap-4 items-center md:ml-14">
                <div>
                  <GrLocation className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <p className="leading-[19.94px] md:text-[20px] text-[16px] font-[700] text-[#1A1A1A]">
                  Passe St Jacques
                </p>
              </div>
            </div>
            <p className="text-[#1A1A1A] md:my-10 my-5 leading-[15.94px] font-[400] text-[14px]">
              Dive into the thrill of The Legendary Passe St Jacques, a haven
              for the daring. Experience the exhilaration of swimming alongside
              stingrays and the majestic, albeit elusive, sharks in their
              natural habitat. While these magnificent creatures have become
              rarities, the possibility of encountering them adds an element of
              surprise and adventure to every dive. Join us for an unforgettable
              journey into the heart of the ocean's mystery, where every moment
              is a discovery.
            </p>
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
              Request Quote{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
