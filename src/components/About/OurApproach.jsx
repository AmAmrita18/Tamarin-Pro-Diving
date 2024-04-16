import React from "react";
import image1 from "../../assets/approach.png";
// import image2 from "../../assets/AboutImg2.png";
import arrow from "../../assets/arrowApproach.png";
const OurApproach = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-96 pb-16 flex flex-row">
        <div className="w-[50%] relative py-20">
          <img
            src={image1}
            alt=""
            className="w-[400px] h-[580px]"
            loading="lazy"
          />
          {/* <div className="absolute top-[320px] left-[250px]">
            <img
              src={image1}
              alt=""
              className="w-[400px] h-[470px]"
              loading="lazy"
            />
          </div> */}
        </div>
        <div className="w-[50%] relative">
          <div className="absolute top-[-90px] left-[150px]">
            <img
              src={arrow}
              alt=""
              className="w-[230px] h-[221px] rotate-6  "
            />
          </div>
          <div className=" absolute top-[-180px] left-[-400px]">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Our Approach
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 text-[57px] leading-[59.78px] font-[700]">
              Our process <br /> Ensure Your Dive <br /> Is Safe and Fun
            </h1>
          </div>
          <div className="absolute bottom-[150px]  ">
            <p className="text-[#1A1A1A] leading-[15.94px]  font-[400] text-[14px]">
              Our Process at Tamarin Ocean Pro Diving Centre is meticulously
              designed to cater to each diver's experience level, ensuring a
              journey that’s as awe-inspiring as it is secure. We initiate every
              dive with a thorough briefing, detailing the unique aspects of
              each dive site, along with essential safety and behavioural
              protocols. This philosophy of personalized attention underpins all
              we do, allowing us to offer bespoke diving experiences that meet
              the specific needs and skills of our divers.
            </p>
            <p className="text-[#1A1A1A] mt-4 leading-[15.94px] font-[400] text-[14px]">
              Whether you need a full equipment set or just a few items, we
              provide a variety of high-quality rental options, from wetsuits to
              snorkels, fins, and masks. For us, safety transcends all —
              requiring divers to present a certification, a detailed logbook,
              and a current medical certificate before embarking on their
              underwater adventure.
            </p>
            <p className="text-[#1A1A1A] mt-4 leading-[15.94px] font-[400] text-[14px]">
              At Tamarin Ocean Pro, our process is not just about facilitating a
              dive; it's about crafting an unforgettable experience with the
              utmost regard for safety, ensuring every descent into the blue is
              a story worth retelling.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
