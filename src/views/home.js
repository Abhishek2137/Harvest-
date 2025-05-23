import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Raje Shivchatrapati Multipurpose Charitable Institute</title>
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name" link2="About Us"></Navbar>
      <Hero
        image1Src="https://images.unsplash.com/photo-1573894999291-f440466112cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1629872928185-171e13c8e58b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1510531704581-5b2870972060?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
