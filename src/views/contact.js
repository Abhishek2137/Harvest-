import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Us - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Contact Us - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="contact-main">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Institute Road, Maharashtra, India</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+91 123 456 7890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>info@rajeshivchatrapati.org</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact 