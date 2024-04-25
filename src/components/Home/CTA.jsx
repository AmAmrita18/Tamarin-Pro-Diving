import React from "react";
import ctaBG from "/cta.png";
const CTA = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${ctaBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <h1 className="font-[700] md:text-[70px] text-[50px] text-white md:leading-[85.15px] leading-tight text-center mt-5">
          Book Your Epic Dive Escape Now
        </h1>
        <p className="font-[400] leading-[19.94px] text-[15px] text-white mt-12 text-center ">
          Dive into the deal of a lifetime with Tamarin Ocean Pro. Discover the
          unseen beauty of Mauritius’ depths. <br /> Reserve your spot beneath
          the waves today and embrace the underwater adventure you deserve.
        </p>
        <div className="flex justify-center">
          {" "}
          <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white mb-5  rounded-full px-16 py-3 mt-12">
            See more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
