import React from "react";
import img1 from "../../assets/Mask(1).png";
import img2 from "../../assets/Mask(2).png";
import img3 from "../../assets/Mask(3).png";
import img4 from "../../assets/Mask(4).png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const DivingSites = () => {
  return (
    <div className="w-full" id="DivingSites">
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 h-full pt-16 md:pb-28 pb-16">
      <div>
      <h2 className="text-[#1A1A1A] md:text-[30px] text-[20px] leading-[26.59px] font-[700] text-center">
          Diving Sites
        </h2>
        <h1 className="text-[#1A1A1A] mt-6 md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700] text-center">
          Popular Diving Sites Along the West Coast{" "}
        </h1>

      </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-28  gap-x-32 md:gap-y-32 md:py-20 py-8">
          <div>
            <div>
              <img src={img1} alt="" className="md:w-[457px] md:h-[598px] w-[300px] h-[398px]" />
            </div>
            <div className="">
              <h1 className="md:text-[40px] text-[30px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              Canyon
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                {/* <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p> */}
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. 
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
                See detail{" "}
              </button>
            </div>
          </div>
          <div className="md:mt-24 mt-16">
            <div>
              <img src={img2} alt="" className="md:w-[457px] md:h-[598px] w-[300px] h-[398px]" />
            </div>
            <div className="">
              <h1 className="md:text-[40px] text-[30px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              Aqua Tamarin
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                {/* <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p> */}
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. 
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3">
                See detail{" "}
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={img3} alt="" className="md:w-[457px] md:h-[598px] w-[300px] h-[398px] mt-16" />
            </div>
            <div className="">
              <h1 className="md:text-[40px] text-[30px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              Colline Tamarin
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                {/* <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p> */}
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. 
              </p>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3 mt-4">
                See detail{" "}
              </button>
            </div>
          </div>
          <div className="mt-16 md:mt-24 ">
            <div>
              <img src={img4} alt="" className="md:w-[457px] md:h-[598px] w-[300px] h-[398px] " />
            </div>
            <div className="">
              <h1 className="md:text-[40px] text-[30px] mt-10 font-[700] leading-[40px] text-[#1A1A1A]">
              Jardin Corail
              </h1>
              <div className="flex gap-5 mt-4 items-center">
                <div className=" gap-2 flex ">
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaStar className="text-[#FF7A2F]" />
                  <FaRegStar />
                </div>
                <h1 className="font-[700] leading-[26.69px] text-[20px]">4/5</h1>
                {/* <p className="leading-[19.94px] text-[15px] font-[400] text-[#1A1A1A]">For Advanced Divers</p> */}
              </div>
              <p className="text-[#1A1A1A] my-10 leading-[15.94px] font-[400] text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. 
              </p>
              <button className="transition-all duration-700 ease-in-out  hover:scale-95 bg-[#011219] text-white  rounded-full px-16 py-3 mt-4">
                See detail{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivingSites;
