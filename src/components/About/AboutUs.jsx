import React from "react";
import image1 from "../../assets/AboutImg1.png";
import image2 from "../../assets/AboutImg2.png";
import arrow from "../../assets/homeArrow.png";


const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-44 pb-64 flex flex-row">
        <div className="w-[50%] relative py-20">
          <img
            src={image2}
            alt=""
            className="w-[400px] h-[580px]"
            loading="lazy"
          />
          <div className="absolute top-[320px] left-[250px]">
            <img
              src={image1}
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
              Travel Agency provides beautiful Dream Place for you{" "}
            </h1>
          </div>
          <div className="absolute bottom-[-80px] ml-24 ">
            <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px]">
              Founded in 2008, Tamarin Ocean Pro has swiftly become a
              cornerstone of diving in Mauritius, situated along the tranquil
              shores of Tamarin Bay and closely aligned with the Veranda Tamarin
              Hotel. We're not just a diving center; we're a beacon for
              underwater exploration, offering tailored dive experiences for
              enthusiasts at every level of proficiency. Accredited by the
              Mauritian Scuba Diving Association (MSDA), our pledge to uphold
              the pinnacle of diving safety and excellence is unwavering.
            </p>
            <p className="text-[#1A1A1A] mt-4 leading-[15.94px] font-[400] text-[14px]">
              At our core, we are more than a team; we are a tight-knit family
              bound by an unbreakable connection to the sea. Our collective
              passion is to guide you through the captivating narratives of the
              ocean, ensuring each dive is memorable. Join us on a journey to
              the heart of the ocean, where every bubble whispers stories of
              adventure, conservation, and the sheer joy of diving into the
              unknown. With Tamarin Ocean Pro, you're not just exploring the
              depths; you're connecting with the soul of the ocean, making
              lifelong memories and stories that resonate with the spirit of
              discovery and the profound beauty of the marine world. Embrace the
              call of the sea with us, where your story intertwines with the
              vast, mysterious blue, creating unforgettable chapters of your own
              epic saga.
            </p>
            <div className="flex flex-row gap-10 mt-10">
              <div className="flex flex-col gap-y-2 items-center">
                <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
                  Dive Guides
                </h2>
                <h1 className="text-[#1A1A1A] text-[46px] leading-[59.83px] font-[700]">
                  20+
                </h1>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
                  Dive Spots
                </h2>
                <h1 className="text-[#1A1A1A] text-[46px] leading-[59.83px] font-[700]">
                  23+
                </h1>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
                  Happy Divers
                </h2>
                <h1 className="text-[#1A1A1A] text-[46px] leading-[59.83px] font-[700]">
                  80k+
                </h1>
              </div>
            </div>
            <div className="absolute top-[330px] left-[-240px]">
              <img src={arrow} alt="" className="w-[350px] h-[181px] rotate-45 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
