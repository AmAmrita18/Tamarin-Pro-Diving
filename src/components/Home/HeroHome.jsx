import React from "react";
import Header from "../Header";
import heroImage from "../../assets/HomeHero.png";
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
      <div className="w-[90%]  max-w-[1200px] mx-auto flex flex-row">
        <div className=" relative w-[50%] pr-8 py-32 h-screen">
          <h1 className="font-[700] text-[70px] text-white leading-[85.15px]">
            Discover The <br />
            Sublime Depths <br /> Of Tamarin Bay
          </h1>
          <p className="font-[400] leading-[19.94px] text-[15px] text-white mt-12">
            Nestled on the scenic west coast of Mauritius, our centre is your
            gateway to the underwater marvels of the island. Experience
            unrivalled clarity and vibrant marine life as we guide you through
            an unforgettable aquatic adventure. Connect with nature, explore
            famous dive sites swiftly by boat, and let the serene waters of
            Tamarin Bay transform your diving dreams into reality.
          </p>
          <div className="flex absolute right-[-115px] w-[180px] h-[180px]">
            <img src={logoHero} alt="" />
          </div>
        </div>

        <div className="w-[50%] h-screen"></div>
      </div>
    </div>
  );
};

export default HeroHome;
