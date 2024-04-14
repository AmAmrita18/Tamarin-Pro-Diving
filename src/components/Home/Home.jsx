import React from 'react'
// import Header from '../Header'
import HeroHome from './HeroHome'
import AboutHome from './AboutHome'
import PopularSites from './PopularSites'
import WhyUs from './WhyUs'
import Gallery from './Gallery'
import CTA from './CTA'
import Package from './Package'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      
      <HeroHome/>
      <AboutHome/>
      <PopularSites/>
      <WhyUs/>
      <Gallery/>
      <CTA/>
     <Package/>
     <Testimonials/>
    </div>
  )
}

export default Home