import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './gallery.css'

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Annual Charity Drive 2024',
      image: 'https://images.unsplash.com/photo-1573894999291-f440466112cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&ixlib=rb-4.0.3&w=1500',
      category: 'Events'
    },
    {
      id: 2,
      title: 'Educational Workshop',
      image: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&ixlib=rb-4.0.3&w=1500',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Health Camp',
      image: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&ixlib=rb-4.0.3&w=1500',
      category: 'Health'
    },
    {
      id: 4,
      title: 'Cultural Festival',
      image: 'https://images.unsplash.com/photo-1510531704581-5b2870972060?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&ixlib=rb-4.0.3&w=1500',
      category: 'Culture'
    },
    {
      id: 5,
      title: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1573894999291-f440466112cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&ixlib=rb-4.0.3&w=1500',
      category: 'Community'
    },
    {
      id: 6,
      title: 'Student Activities',
      image: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&ixlib=rb-4.0.3&w=1500',
      category: 'Education'
    }
  ]

  const categories = ['All', 'Events', 'Education', 'Health', 'Culture', 'Community']

  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Gallery - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="gallery-main">
        <h1 className="gallery-title">Our Gallery</h1>
        
        <div className="gallery-categories">
          {categories.map((category, index) => (
            <button key={index} className="category-button">
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image-container">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery 