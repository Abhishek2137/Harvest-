import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features11 from '../components/features11'
import Team1 from '../components/team1'
import Footer from '../components/footer'
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="About - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="about-main">
        <h1 className="about-title">About Us</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>To empower communities through education, healthcare, and sustainable development initiatives.</p>
          </div>
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>To create a society where every individual has access to quality education and healthcare.</p>
          </div>
          <div className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li>Integrity and Transparency</li>
              <li>Community Empowerment</li>
              <li>Innovation and Excellence</li>
              <li>Social Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
