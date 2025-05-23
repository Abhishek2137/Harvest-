import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './events.css'

const Events = () => {
  const events = [
    {
      title: 'Annual Charity Drive',
      date: 'June 15, 2024',
      description: 'Join us for our annual charity drive to support local communities',
      location: 'Main Campus'
    },
    {
      title: 'Educational Workshop',
      date: 'July 1, 2024',
      description: 'Free workshop on digital literacy for students',
      location: 'Learning Center'
    },
    {
      title: 'Health Camp',
      date: 'July 20, 2024',
      description: 'Free health checkup camp for the community',
      location: 'Community Hall'
    },
    {
      title: 'Cultural Festival',
      date: 'August 5, 2024',
      description: 'Celebrating our rich cultural heritage through performances',
      location: 'Open Air Theater'
    }
  ]

  return (
    <div className="events-container">
      <Helmet>
        <title>Events - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Events - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="events-main">
        <h1 className="events-title">Upcoming Events</h1>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <div className="event-details">
                <p className="event-date">📅 {event.date}</p>
                <p className="event-location">📍 {event.location}</p>
              </div>
              <p className="event-description">{event.description}</p>
              <Link to="/register" className="event-register">Register Now</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events 