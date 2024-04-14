import React from "react";
import image1 from "../../assets/HomeAbout1.png";
import image2 from "../../assets/HomeAbout2.png";
import arrow from "../../assets/homeArrow.png";
const AboutHome = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto py-44 flex flex-row">
        <div className="w-[50%] relative py-20">
          <img
            src={image1}
            alt=""
            className="w-[400px] h-[580px]"
            loading="lazy"
          />
          <div className="absolute top-[320px] left-[250px]">
            <img
              src={image2}
              alt=""
              className="w-[400px] h-[470px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-[50%] relative">
          <div className=" absolute left-[-75px]">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              About Us
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
              Discover Serene Underwater Wonders With Us
            </h1>
          </div>
          <div className="absolute bottom-[90px] ml-24">
            <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px]">
              Located in the heart of Tamarin Bay, Mauritius, our sanctuary is
              not just a dive center; it's a portal to a world of aquatic
              wonder. With a decade of expertise, we offer personalized dive
              experiences, led by our seasoned team, to the island's most
              enchanting underwater sites. Dive in and let the ocean's narrative
              unfold around you.
            </p>
            <button className="bg-[#011219] text-white mt-10 rounded-full px-16 py-3">
              See detail{" "}
            </button>
            <div className="absolute top-[180px] left-[-220px]">
              <img src={arrow} alt="" className="w-[295px] h-[161px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
