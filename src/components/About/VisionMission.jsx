import React from "react";
import arrow from "../../assets/arrowApproach.png";
import arrow1 from "../../assets/Ellipse 5.png"
import arrow2 from "../../assets/Ellipse 6.png"

const VisionMission = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] py-20 mx-auto flex gap-44">
        <div className="">
          <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
            Vision
          </h2>
          <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
            Our Vision
          </h1>
          <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px] my-4">
            Our Vision at Tamarin Ocean Pro Diving Centre is to unveil the
            majestic marine world of Mauritius to every soul drawn to the
            ocean's call. We strive to be the bridge between humanity and the
            deep blue, offering transformative diving experiences that highlight
            the beauty, diversity, and fragility of our underwater ecosystems.
          </p>
          <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px]">
            As guardians of the sea, we're committed to sustainable practices
            that protect our marine heritage for future generations. Our vision
            extends beyond discovery; it's about creating a community of
            eco-conscious divers who respect and celebrate the ocean’s bounty.
            Dive with us, and become part of a movement preserving the magic
            beneath the waves.
          </p>
          <div className="absolute  mt-16 left-[450px]">
            <img
              src={arrow1}
              alt=""
              className="w-[350px] h-[151px] rotate-6  "
            />
          </div>
        </div>
        <div className="">
        <div className="absolute left-[650px]">
            <img
              src={arrow2}
              alt=""
              className="w-[350px] h-[151px] rotate-6 "
            />
          </div>
          <h2 className="text-[#1A1A1A] mt-44 text-[20px] leading-[26.59px] font-[700]">
            Mission
          </h2>
          <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
            Our Mission
          </h1>
          <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px] my-4">
            Our Vision at Tamarin Ocean Pro Diving Centre is to unveil the
            majestic marine world of Mauritius to every soul drawn to the
            ocean's call. We strive to be the bridge between humanity and the
            deep blue, offering transformative diving experiences that highlight
            the beauty, diversity, and fragility of our underwater ecosystems.
          </p>
          <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px]">
            As guardians of the sea, we're committed to sustainable practices
            that protect our marine heritage for future generations. Our vision
            extends beyond discovery; it's about creating a community of
            eco-conscious divers who respect and celebrate the ocean’s bounty.
            Dive with us, and become part of a movement preserving the magic
            beneath the waves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
