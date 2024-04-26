import React from "react";
import image1 from "../../assets/HomeAbout1.png";
import image2 from "../../assets/HomeAbout2.png";
import arrow from "../../assets/homeArrow.png";
const AboutHome = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 md:py-44 py-16 flex md:flex-row flex-col-reverse">
        <div className="md:w-[50%] relative md:py-20 py-16">
          <img
            src={image1}
            alt=""
            className="lg:w-[400px] lg:h-[580px] w-[260px] h-[400px]"
            loading="lazy"
          />
          <div className="absolute md:top-[320px] lg:left-[250px] top-[260px] left-[120px]">
            <img
              src={image2}
              alt=""
              className="lg:w-[400px] lg:h-[470px] md:w-[220px] md:h-[330px] w-[200px] h-[300px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:w-[50%] relative">
          <div className=" md:absolute left-[-75px]">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              About Us
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 lg:text-[57px] md:text-[50px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
              Discover Serene Underwater Wonders With Us
            </h1>
          </div>
          <div className="md:absolute bottom-[90px] md:ml-24">
            <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px] md:mt-0 mt-5">
              Located in the heart of Tamarin Bay, Mauritius, our sanctuary is
              not just a dive center; it's a portal to a world of aquatic
              wonder. With a decade of expertise, we offer personalized dive
              experiences, led by our seasoned team, to the island's most
              enchanting underwater sites. Dive in and let the ocean's narrative
              unfold around you.
            </p>
            <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white mt-10 rounded-full px-16 py-3">
              See detail{" "}
            </button>
            <div className="absolute md:block hidden lg:top-[180px] lg:left-[-220px] top-[270px] left-[-220px]">
              <img src={arrow} alt="" className="w-[295px] h-[161px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
