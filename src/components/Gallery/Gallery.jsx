import React from 'react'
import CTA from '../Home/CTA'
import Testimonials from '../Home/Testimonials'
import HeroGallery from './HeroGallery'
import Margin from '../DivingCourses/Margin'
import GallerySwiper from './GallerySwiper'

const Gallery = () => {
  return (
    <div>
      <HeroGallery/>
      <GallerySwiper/>
      <CTA/>
      <Margin/>
      <Testimonials/>
    </div>
  )
}

export default Gallery