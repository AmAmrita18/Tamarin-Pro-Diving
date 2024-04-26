import React from "react";
import Header from "../Header";
import heroImage from "/HomeHero.png";
import map from "../../assets/map.png";
import logoHero from "../../assets/herologo.png";
const HeroHome = () => {
  return (
    <div
      className="w-full bg-[#022A3A] "
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="w-[90%]  max-w-[1200px] mx-auto md:px-0 px-4 flex flex-row">
        <div className=" relative lg:w-[50%] lg:pr-8 md:py-32 py-16 h-screen">
          <h1 className="font-[700] md:block hidden md:text-[70px] text-[50px] text-white md:leading-[85.15px]">
            Discover The <br />
            Sublime Depths <br /> Of Tamarin Bay
          </h1>
          <h1 className="font-[700] md:hidden  md:text-[70px] text-[45px] text-white md:leading-[85.15px]">
            Discover The
            Sublime Depths Of Tamarin Bay
          </h1>
          <p className="font-[400] leading-[19.94px] text-[15px] text-white md:mt-12 mt-5">
            Nestled on the scenic west coast of Mauritius, our centre is your
            gateway to the underwater marvels of the island. Experience
            unrivalled clarity and vibrant marine life as we guide you through
            an unforgettable aquatic adventure. Connect with nature, explore
            famous dive sites swiftly by boat, and let the serene waters of
            Tamarin Bay transform your diving dreams into reality.
          </p>
          <div className="flex absolute mt-5 lg:mt-0 md:mt-24 md:right-[130px]   lg:right-[-115px] right-[70px] md:w-[180px] md:h-[180px] w-[100px] h-[100px]">
            <img src={logoHero} alt="" />
          </div>
        </div>

        <div className="w-[50%] h-screen"></div>
      </div>
    </div>
  );
};

export default HeroHome;
