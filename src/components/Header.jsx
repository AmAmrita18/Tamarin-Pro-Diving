import { useEffect, useState } from 'react'
import React from "react";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "../assets/logo.png";
import { FaBars } from 'react-icons/fa'
import { IoIosCloseCircle } from "react-icons/io";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center w-[90%] max-w-[1200px] md:px-4 px-0 pt-14 mx-auto">
        <div className='flex flex-row items-center gap-x-4'>
          <Link to="/">
            <img
              src={headerLogo}
              alt="Logo"
              className=" object-cover lg:w-[50px]  lg:h-[50px] md:w-[90px] md:h-[100px] w-[50px] h-[60px]"
              width={50}
              height={50}
              loading="lazy"

            />
            
          </Link>
          <h1 className='text-white leading-[26.59px] font-[700] text-[20px] items-center'>Tamarin Ocean Pro Diving Center</h1>
        </div>

        <nav className="">
          <ul className="md:flex hidden lg:gap-x-4 md:gap-x-8  gap-4 md:text-[20px] text-[15px] font-[400] text-[#FFFFFF] leading-[26.59px]">
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/" className={({isActive}) => `${isActive && "font-700"}`}>Home</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/about" className={({isActive}) => `${isActive && "font-700"}`}>About</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/courses" className={({isActive}) => `${isActive && "font-700"}`}>Diving Courses</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/sites" className={({isActive}) => `${isActive && "font-700"}`}>Diving Sites</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/specials" className={({isActive}) => `${isActive && "font-700"}`}>Specials</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/gallery" className={({isActive}) => `${isActive && "font-700"}`}>Gallery</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/contact" className={({isActive}) => `${isActive && "font-700"}`}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex justify-center items-center">
            <div
              onClick={toggleMenu}
              className="text-[#FFFFFF] cursor-pointer focus:outline-none"
              
            >
              {isMenuOpen ? (
                <IoIosCloseCircle
                onClick={toggleMenu} className="w-10 h-10 " />
              ) : (
                <FaBars onClick={toggleMenu} className="w-6 h-6" />
              )}
              
            </div>
        </div>
        <div
          className={`space-y-4 w-[85%]  rounded-2xl max-w-[1200px] mx-auto px-4 md:hidden mt-16 py-32 bg-[#0A385A] opacity-90 ${
            isMenuOpen ? "block fixed top-14 right-0 left-0" : "hidden"
          }`}
         
        >
          <ul className=" flex flex-col items-center  lg:gap-x-14 md:gap-x-8  gap-8 md:text-[17px] text-[15px] font-[400] text-[#FFFFFF] leading-6">
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/" className={({isActive}) => `${isActive && "font-700"}`}>Home</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/about" className={({isActive}) => `${isActive && "font-700"}`}>About</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/products" className={({isActive}) => `${isActive && "font-700"}`}>Diving Courses</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/contact" className={({isActive}) => `${isActive && "font-700"}`}>Diving Sites</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/" className={({isActive}) => `${isActive && "font-700"}`}>Specials</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/" className={({isActive}) => `${isActive && "font-700"}`}>Gallery</NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink to="/" className={({isActive}) => `${isActive && "font-700"}`}>Contact</NavLink>
            </li>
          </ul>
          
        </div>

      </div>
    </div>
  );
};

export default Header;