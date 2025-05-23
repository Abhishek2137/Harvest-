import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './services.css'

const Services = () => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Services - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="services-main">
        <h1 className="services-title">Our Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <h3>Education Support</h3>
            <p>Providing quality education and learning resources to underprivileged students</p>
          </div>
          <div className="service-card">
            <h3>Community Development</h3>
            <p>Working towards sustainable community development through various initiatives</p>
          </div>
          <div className="service-card">
            <h3>Healthcare Services</h3>
            <p>Offering basic healthcare services and medical camps for the community</p>
          </div>
          <div className="service-card">
            <h3>Skill Development</h3>
            <p>Training programs to enhance employability and self-reliance</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services 