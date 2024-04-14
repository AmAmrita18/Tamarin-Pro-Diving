import React from "react";
import image1 from "../../assets/gallery1.png";
import image2 from "../../assets/gallery2.png";
import image3 from "../../assets/gallery3.png";
import image4 from "../../assets/gallery4.png";
const Gallery = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] flex max-w-[1200px] mx-auto py-36">
        <div className="w-[65%] grid grid-cols-2 gap-x-8 gap-y-8">
          <div>
            <img src={image1} alt="" className="w-[374px] h-[553px]" />
          </div>
          <div className="mt-[186px]">
            <img src={image2} alt="" className="w-[374px] h-[363px]" />
          </div>
          <div className="relative">
            <img src={image3} alt="" className="w-[374px] h-[363px]" />
            <h1 className="absolute left-[80px] bottom-[350px] text-white text-[36px] leading-[48.75px] font-[700]">
              Tamarin Bay
            </h1>
          </div>
          <div>
            <img src={image4} alt="" className="w-[374px] h-[553px]" />
          </div>
        </div>

        <div className="w-[35%] pl-16 py-44">
          <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
            Gallery
          </h2>
          <h1 className="text-[#1A1A1A] mt-6 mb-4 text-[57px] leading-[59.78px] font-[700]">
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
          <button className="bg-[#011219] text-white  rounded-full px-16 py-3 mt-6">
            See more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
