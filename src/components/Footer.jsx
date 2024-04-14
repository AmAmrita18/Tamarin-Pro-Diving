import React from "react";
import footerWall from "/footerWall.png";
import footerBG from "/footerBG.png";
import logo from "/logo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import shadowBG from "../assets/shadowFooter.png"
const Footer = () => {
  return (
    <div className="w-full bg-[#022A3A]">
      
      <div className="relative">
      <div className="absolute top-[-3px]">
      <img src={shadowBG} alt="" />
      </div>
        <img src={footerWall} alt="" />
      </div>
      
      <div
        style={{
          backgroundImage: `url('${footerBG}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "left",
        }}
      >
       
        <div className="w-[90%] max-w-[1200px] py-5 text-white  mx-auto flex flex-col">
          <div className="flex flex-row justify-between gap-10 py-5">
            <div>
              <div className="flex flex-row gap-4 items-center">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  <h1 className="text-white leading-[26.59px] font-[700] text-[20px] items-center">
                    Tamarin Ocean Pro <br /> Diving Center
                  </h1>
                </div>
              </div>
              <p className="text-[#D5D9DB] font-[400] py-4 text-[15px]">
                Dive into Tamarin Bay’s splendor with us. Discover unparalleled
                underwater clarity and vibrant marine life guided by our
                seasoned experts.
              </p>
              <ul className="flex gap-3">
                <li className="">
                  <IoLogoFacebook className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li className="">
                  <FaLinkedin className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li className="">
                  <FaTwitter className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li className="">
                  <AiFillInstagram className="w-6 h-6 text-[#D5D9DB]" />
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-[#D5D9DB] leading-[26.59px] font-[700] text-[20px] items-center">
                Page
              </h1>
              <ul className="text-[#D5D9DB] font-[400] py-4 w-28 gap-y-2 flex flex-col text-[15px]">
                <li className="">Home</li>
                <li className="">About Us</li>
                <li className="">Diving Courses </li>
                <li className="">Diving Sites </li>
                <li className="">Specials </li>
                <li className="">Gallery </li>
                <li className="">Contact </li>
              </ul>
            </div>

            <div>
              <h1 className="text-[#D5D9DB] leading-[26.59px] font-[700] text-[20px] items-center">
                Links{" "}
              </h1>
              <ul className="text-[#D5D9DB] font-[400] py-4  w-28 gap-y-2 flex flex-col text-[15px]">
                <li className="">Term of Use </li>
                <li className="">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[#D5D9DB] leading-[26.59px] font-[700] text-[20px] pb-4 items-center">
                Contact Us
              </h1>
              <ul className="text-[#D5D9DB] font-[400] py-2 gap-x-4 flex flex-row text-[15px]">
                <li>
                  <IoCallOutline className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li>+230 5 786 95 54 / +230 5 728 20 27</li>
              </ul>
              <ul className="text-[#D5D9DB] font-[400] py-2 gap-x-4 flex flex-row text-[15px]">
                <li>
                  <FaRegEnvelope className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li>contact@tamarinoceanprodiving.com</li>
              </ul>
              <ul className="text-[#D5D9DB] font-[400] py-2 gap-x-4 flex flex-row text-[15px]">
                <li>
                  <GrLocation className="w-6 h-6 text-[#D5D9DB]" />
                </li>
                <li>Tamarin Bay, Tamarin, Mauritius</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[#D5D9DB] leading-[26.59px] font-[700] text-[20px] items-center">
                Booking a Diving Session
              </h1>
              <p className="text-[#D5D9DB] font-[400] py-4 text-[15px]">
                Reserve your dive today and embrace the wonders of Tamarin Bay.
                Experience the marine splendor with top guides.
              </p>
              <button className="bg-[#011219] text-white  rounded-full px-16 py-3 mt-6">
            Book a Dive{" "}
          </button>
            </div>
          </div>
          <div className=" border-t mt-4 border-white">
            <h1 className="text-white font-[400] py-4  flex flex-col leading-[19.94px] text-center mt-4 text-[15px]">
              Copyright @2024. Tamarin Ocean Pro Diving Center All Right
              Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
