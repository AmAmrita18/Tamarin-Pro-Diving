import React from 'react'
import Header from '../Header'
import heroImage from "/GalleryHero.png"
const HeroGallery = () => {
  return (
    <div className='w-full h-screen'
    style={{
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",
      backgroundPosition: "center",
    }}>
        <Header/>
        <div className='w-[90%] max-w-[1200px] mx-auto md:py-44 py-24'>
            <h1 className="font-[700] text-center md:text-[70px] text-[45px] text-white leading-[85.15px] ">Gallery</h1>
            <p className="font-[400] text-center leading-[19.94px] text-[15px] text-white mt-12 w-[70%] mx-auto">Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices vulputate sem quis dui eu. Amet tincidunt est elementum fermentum tellus velit. Et dolor risus tempor dui velit. Eget aenean placerat ac feugiat amet ac risus mus. </p>
        </div>
    </div>
  )
}

export default HeroGallery