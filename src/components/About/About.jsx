import React from 'react'
import CTA from '../Home/CTA'
import Testimonials from '../Home/Testimonials'
import HeroAbout from './HeroAbout'
import AboutUs from './AboutUs'
import OurApproach from './OurApproach'
import TourGuide from './TourGuide'
import VisionMission from './VisionMission'

const About = () => {
  return (
    <div>
      <HeroAbout/>
      <AboutUs/>
      <VisionMission/>
      <OurApproach/>
      <CTA/>
      <TourGuide/>
      <Testimonials/>
    </div>
  )
}

export default About