import React from 'react'
import CTA from '../Home/CTA'
import Testimonials from '../Home/Testimonials'
import HeroSpecials from './HeroSpecials'
import Packages from './Packages'
import Margin from '../DivingCourses/Margin'

const Specials = () => {
  return (
    <div>
      <HeroSpecials/>
      <Packages/>
      <CTA/>
      <Margin/>
      <Testimonials/>
    </div>
  )
}

export default Specials