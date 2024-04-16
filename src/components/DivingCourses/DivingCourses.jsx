import React from 'react'
import CTA from '../Home/CTA'
import Testimonials from '../Home/Testimonials'
import HeroCourses from './HeroCourses'
import Margin from './Margin'
import TailouredPackages from './TailouredPackages'
import DivingSites from './DivingSites'

const DivingCourses = () => {
  return (
    <div>
      <HeroCourses/>
      <TailouredPackages/>
      <DivingSites/>
      <CTA/>
      <Margin/>
      <Testimonials/>
    </div>
  )
}

export default DivingCourses