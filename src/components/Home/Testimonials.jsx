import React from "react";
import image1 from "../../assets/Testi1.png";
import image2 from "../../assets/Testi2.png";
import { FaStar } from "react-icons/fa";
import arrow from "../../assets/ArrowTesti.png";
import owlLogo from "../../assets/vector.png";
import peop1 from "../../assets/people1.png";
import peop2 from "../../assets/people2.png";
import peop3 from "../../assets/people3.png";
const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 flex md:flex-row flex-col-reverse">
        <div className="md:w-[50%]">
          <div className="my-20 md:block hidden">
            <img
              src={arrow}
              alt=""
              className="w-[455px] h-[241px] -rotate-12"
            />
          </div>
          <div className="md:pt-28  pb-12">
            <h2 className="text-[#1A1A1A] text-[20px] md:leading-[26.59px] leading-tight font-[700]">
              Testimonials
            </h2>
            <h1 className="text-[#1A1A1A] mt-6 md:text-[57px] text-[40px] leading-[59.78px] font-[700]">
              What they say <br /> about us?
            </h1>
          </div>
          <div className="flex flex-col gap-10 md:mr-20 pb-20">
            <div className="flex gap-8">
              <div>
                <img src={peop1} alt="" className="md:w-[172px] md:h-[62px] w-[192px] h-[40px]" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px]">
                  Wonderful Une équipe merveilleuse et bienveillante. Nous avons
                  passé un super moment et surtout vécu des plongées incroyables
                  !! Merci encore mille fois et on a hâte de revenir
                </p>
                <div className="flex gap-4">
                  <div>
                    <img src={owlLogo} alt="" className="w-[30px] h-[20px]" />
                  </div>
                  <div className=" gap-2 flex ">
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                  </div>
                  <h1 className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    5/5
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <img src={peop2} alt="" className="md:w-[192px] md:h-[62px] w-[232px] h-[40px]" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px]">
                  Lo recomiendo 100% Todo bien en general, las explicaciones muy
                  claras, todo el personal muy agradable y haciendo para que
                  todas lo pasásemos bien y aprendiésemos. La zona de buceo
                  preciosa! Lo recomiendo 100%
                </p>
                <div className="flex gap-4">
                  <div>
                    <img src={owlLogo} alt="" className="w-[30px] h-[20px]" />
                  </div>
                  <div className=" gap-2 flex ">
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                  </div>
                  <h1 className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    5/5
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <img src={peop3} alt="" className="md:w-[92px] md:h-[58px] w-[122px] h-[40px]" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px]">
                  Au top Une super expérience, Olivier et son équipe sont au
                  top, bonne humeur et professionnalisme. 👍👍😜😜
                </p>
                <div className="flex gap-4">
                  <div>
                    <img src={owlLogo} alt="" className="w-[30px] h-[20px]" />
                  </div>
                  <div className=" gap-2 flex">
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                    <FaStar className="text-[#FF7A2F]" />
                  </div>
                  <h1 className="leading-[19.94px] text-[20px] font-[700] text-[#1A1A1A]">
                    5/5
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:block hidden md:relative ">
          <div className="absolute top-0 md:-left-40 left-0 ">
            <img
              src={image2}
              alt=""
              className="md:w-[400px] md:h-[470px] w-[250px] h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[150px] -z-30">
            <img
              src={image1}
              alt=""
              className="md:w-[781px] md:h-[810px] "
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
