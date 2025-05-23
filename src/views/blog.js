import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Annual Charity Drive Success',
      excerpt: 'Our annual charity drive was a tremendous success, raising over ₹5 lakhs for community development projects.',
      image: 'https://images.unsplash.com/photo-1573894999291-f440466112cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&ixlib=rb-4.0.3&w=1500',
      date: 'March 15, 2024',
      category: 'Events'
    },
    {
      id: 2,
      title: 'New Educational Programs',
      excerpt: 'We are excited to announce new educational programs focused on digital literacy and vocational training.',
      image: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&ixlib=rb-4.0.3&w=1500',
      date: 'March 10, 2024',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Health Camp Impact',
      excerpt: 'Our recent health camp provided free checkups to over 500 community members. Read about the impact.',
      image: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGluZGlhbiUyMHNjaG9vbHxlbnwwfHx8fDE3NDI1ODc0MzF8MA&ixlib=rb-4.0.3&w=1500',
      date: 'March 5, 2024',
      category: 'Health'
    },
    {
      id: 4,
      title: 'Cultural Festival Highlights',
      excerpt: 'Relive the moments from our annual cultural festival that celebrated our rich heritage.',
      image: 'https://images.unsplash.com/photo-1510531704581-5b2870972060?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxpbmRpYW4lMjBzY2hvb2x8ZW58MHx8fHwxNzQyNTg3NDMxfDA&ixlib=rb-4.0.3&w=1500',
      date: 'February 28, 2024',
      category: 'Culture'
    }
  ]

  const categories = ['All', 'Events', 'Education', 'Health', 'Culture', 'Community']

  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Blog - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="blog-main">
        <h1 className="blog-title">Our Blog</h1>
        
        <div className="blog-categories">
          {categories.map((category, index) => (
            <button key={index} className="category-button">
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-pagination">
          <button className="pagination-button">Previous</button>
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
          </div>
          <button className="pagination-button">Next</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog 