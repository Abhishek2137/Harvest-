import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './volunteer.css'

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <Helmet>
        <title>Volunteer - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Volunteer - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="volunteer-main">
        <h1 className="volunteer-title">Become a Volunteer</h1>
        <div className="volunteer-content">
          <div className="volunteer-info">
            <h2>Make a Difference</h2>
            <p>Join our team of dedicated volunteers and help us make a positive impact in our community. We offer various opportunities for you to contribute your time and skills.</p>
            
            <div className="volunteer-benefits">
              <h3>Benefits of Volunteering</h3>
              <ul>
                <li>Make a meaningful impact in your community</li>
                <li>Develop new skills and gain experience</li>
                <li>Meet like-minded people</li>
                <li>Build your professional network</li>
                <li>Personal growth and satisfaction</li>
              </ul>
            </div>

            <div className="volunteer-areas">
              <h3>Areas of Involvement</h3>
              <ul>
                <li>Education Support</li>
                <li>Community Outreach</li>
                <li>Event Organization</li>
                <li>Administrative Support</li>
                <li>Technical Assistance</li>
              </ul>
            </div>
          </div>

          <div className="volunteer-form-container">
            <h2>Volunteer Application</h2>
            <form className="volunteer-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="area">Area of Interest</label>
                <select id="area" name="area" required>
                  <option value="">Select an area</option>
                  <option value="education">Education Support</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="events">Event Organization</option>
                  <option value="admin">Administrative Support</option>
                  <option value="technical">Technical Assistance</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select id="availability" name="availability" required>
                  <option value="">Select availability</option>
                  <option value="weekday-morning">Weekday Mornings</option>
                  <option value="weekday-afternoon">Weekday Afternoons</option>
                  <option value="weekday-evening">Weekday Evenings</option>
                  <option value="weekend">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Why do you want to volunteer?</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Volunteer 