import React, { useState } from "react";
import formImg from "../../assets/contactForm.png";
const FormContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto max-w-[1200px] h-full flex flex-row py-32">
        <div className="w-[55%] pr-24">
          <h1 className="text-[#1A1A1A] mb-6 text-[57px] leading-[59.78px] font-[700]">
            Get In Touch
          </h1>

          <form action="#">
            <div>
              <div className="flex flex-row gap-12 mb-5">
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 text-[35px] leading-[45.78px] font-[700]"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[20px]  text-[#1A1A1A] font-[700] transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 text-[35px] leading-[45.78px] font-[700]"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[20px]  text-[#1A1A1A] font-[700] transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                  />{" "}
                </div>
              </div>
              <div className="flex flex-row gap-12 mb-5">
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 text-[35px] leading-[45.78px] font-[700]"
                  >
                    Your Phone*
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+230 2332xxx"
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[20px]  text-[#1A1A1A] font-[700] transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 text-[35px] leading-[45.78px] font-[700]"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[20px]  text-[#1A1A1A] font-[700]  transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col gap-y-3 w-full">
                <label
                  htmlFor=""
                  className="text-[#1A1A1A] mt-6 text-[35px] leading-[45.78px] font-[700]"
                >
                  Message*
                </label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="10"
                  cols="50"
                  placeholder="Hello, Iám interested in..."
                  className="bg-transparent tracking-wider pl-3 text-[20px]  text-[#1A1A1A] font-[700]  w-full placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                ></textarea>
              </div>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white mt-10 rounded-full px-16 py-3">
              See detail{" "}
            </button>
            </div>
          </form>
        </div>
        <div className="w-[45%]">
          <img src={formImg} alt="" className="h-[920px] w-[680px]"/>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
