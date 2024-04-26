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
      <div className="w-[90%] mx-auto md:px-0 px-4 max-w-[1200px] h-full flex lg:flex-row flex-col-reverse md:py-32 py-16">
        <div className="lg:w-[55%] mx-auto lg:pr-24">
          <h1 className="text-[#1A1A1A] mb-6 lg:text-[57px] md:text-[50px]  text-[40px] md:leading-[59.78px] leading-tight font-[700]">
            Get In Touch
          </h1>

          <form action="#">
            <div>
              <div className="flex md:flex-row flex-col lg:gap-12 mb-5">
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 md:text-[35px] text-[20px] leading-[45.78px] font-[700]"
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
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[15px]  text-[#1A1A1A] font-[700] placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[15px] outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 md:text-[35px] text-[20px] leading-[45.78px] font-[700]"
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
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[15px]  text-[#1A1A1A] font-[700] placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[15px] outline outline-0 focus:outline-0"
                  />{" "}
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-12 mb-5">
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] md:mt-6 md:text-[35px] text-[20px] leading-[45.78px] font-[700]"
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
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[15px]  text-[#1A1A1A] font-[700]  placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[15px] outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full">
                  <label
                    htmlFor=""
                    className="text-[#1A1A1A] mt-6 md:text-[35px] text-[20px] leading-[45.78px] font-[700]"
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
                    className="bg-transparent lg:w-[100%] md:w-[230px] w-full text-[15px]  text-[#1A1A1A] font-[700]  placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[15px] outline outline-0 focus:outline-0"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col  gap-y-3 w-full">
                <label
                  htmlFor=""
                  className="text-[#1A1A1A] md:mt-6 md:text-[35px] text-[20px] leading-[45.78px] font-[700]"
                >
                  Message*
                </label>
                <textarea
                
                  id="w3review"
                  name="w3review"
                  rows="8"
                  cols="50"
                  placeholder="Your message"
                  className="bg-transparent tracking-wider pl-3 text-[20px]  text-[#1A1A1A] resize-none font-[700]  w-full placeholder:text-[#1A1A1A] placeholder:font-[700] border rounded-3xl py-4 px-6 border-[#1A1A1A] placeholder:text-[20px] outline outline-0 focus:outline-0"
                ></textarea>
              </div>
              <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white mt-10 rounded-full px-16 py-3">
              Send Message{" "}
            </button>
            </div>
          </form>
        </div>
        <div className="lg:w-[45%] md:block hidden mx-auto md:mt-0 mt-8 lg:mb-0 md:mb-10">
          <img src={formImg} alt="" className="lg:h-[920px] md:h-[1120px] w-[680px] object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
