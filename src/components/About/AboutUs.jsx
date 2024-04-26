import React from "react";
import image1 from "../../assets/AboutImg1.png";
import image2 from "../../assets/AboutImg2.png";
import arrow from "../../assets/homeArrow.png";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 md:pt-44 lg:pb-64 md:pb-[450px] pt-16 pb-16 flex md:flex-row flex-col-reverse">
        <div className="md:w-[50%] relative md:py-20 py-8">
          <img
            src={image2}
            alt=""
            className="lg:w-[400px] lg:h-[580px] w-[260px] h-[400px]"
            loading="lazy"
          />
          <div className="absolute md:top-[320px] lg:left-[250px] top-[260px] left-[120px]">
            <img
              src={image1}
              alt=""
              className="lg:w-[400px] lg:h-[470px] w-[200px] h-[300px]"
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
              Travel Agency provides beautiful Dream Place for you{" "}
            </h1>
          </div>
          <div className="md:absolute lg:bottom-[-80px] md:bottom-[-300px] md:ml-24 md:mt-0 mt-5 ">
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
                <h2 className="text-[#1A1A1A] text-[20px] md:leading-[26.59px] leading-tight font-[700]">
                  Dive Guides
                </h2>
                <h1 className="text-[#1A1A1A] md:text-[46px] text-[35px] leading-[59.83px] font-[700]">
                  20+
                </h1>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <h2 className="text-[#1A1A1A] text-[20px] md:leading-[26.59px] leading-tight font-[700]">
                  Dive Spots
                </h2>
                <h1 className="text-[#1A1A1A] md:text-[46px] text-[35px] leading-[59.83px] font-[700]">
                  23+
                </h1>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <h2 className="text-[#1A1A1A] text-[20px] md:leading-[26.59px] leading-tight font-[700]">
                  Happy Divers
                </h2>
                <h1 className="text-[#1A1A1A] md:text-[46px] text-[35px] leading-[59.83px] font-[700]">
                  80k+
                </h1>
              </div>
            </div>
            <div className="absolute md:block hidden top-[330px] lg:left-[-240px] md:left-[-380px]">
              <img
                src={arrow}
                alt=""
                className="w-[350px] h-[181px] rotate-45 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
