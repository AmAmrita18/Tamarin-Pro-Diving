import React from "react";
import image1 from "../../assets/gallery1.png";
import image2 from "../../assets/gallery2.png";
import image3 from "../../assets/gallery3.png";
import image4 from "../../assets/gallery4.png";
const Gallery = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] flex md:flex-row flex-col-reverse max-w-[1200px] mx-auto md:px-0 px-4 md:py-36 py-16">
        <div className="md:w-[65%] grid grid-cols-2 md:gap-x-8 gap-x-4 md:gap-y-8 gap-y-4">
          <div>
            <img src={image1} alt="" className="w-[374px] md:h-[553px] h-[350px] object-cover" />
          </div>
          <div className="md:mt-[186px] mt-[90px] ">
            <img src={image2} alt="" className="w-[374px] md:h-[363px] h-[260px] object-cover" />
          </div>
          <div className="relative">
            <img src={image3} alt="" className="w-[374px] md:h-[363px] h-[260px] object-cover" />
            <h1 className="absolute md:left-[80px] md:bottom-[350px] left-[25px] bottom-[190px] text-white md:text-[36px] text-[25px] md:leading-[48.75px] font-[700]">
              Tamarin Bay
            </h1>
          </div>
          <div>
            <img src={image4} alt="" className="w-[374px] md:h-[553px] h-[350px] object-cover" />
          </div>
        </div>

        <div className="md:w-[35%] md:pl-16 md:py-44 pb-16 md:pb-0">
          <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
            Gallery
          </h2>
          <h1 className="text-[#1A1A1A] mt-6 mb-4 md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
            Moments captured by connoisseurs of The deep
          </h1>
          <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px] py-4">
            Submerge into the heart of the ocean with us. At Tamarin Ocean Pro,
            we weave through the water’s embrace, uncovering and capturing the
            silent dance of aquatic life. Witness the grace of the sea in our
            gallery.
          </p>
          <p className="text-[#1A1A1A] leading-[15.94px] font-[400] text-[14px]">
            Our lens reflects the azure soul of Mauritius. Each dive is a
            canvas, each moment a brushstroke of marine marvels. Glide with us
            past coral gardens and into the tranquil deep. Here, the ocean's
            poetry comes to life.
          </p>
          <button className="bg-[#011219] transition-all duration-700 ease-in-out  hover:scale-95 text-white  rounded-full px-16 py-3 mt-6">
            See more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
