import React, { useState, useEffect } from 'react'
import { apiClient } from '../utils/api'
import './Dashboard.css'

const Dashboard = ({ apiBaseUrl }) => {
  const [stats, setStats] = useState({
    events: 0,
    blogs: 0,
    faqs: 0,
    gallery: 0,
    messages: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const client = apiClient(apiBaseUrl)

      // Fetch all collections in parallel
      const [events, blogs, faqs, gallery, messages] = await Promise.all([
        client.get('/events?active_only=false'),
        client.get('/blogs?published_only=false'),
        client.get('/faqs?active_only=false'),
        client.get('/gallery?active_only=false'),
        client.get('/contact-messages'),
      ])

      // Since API returns a direct array → use data.length
      setStats({
        events: Array.isArray(events.data) ? events.data.length : 0,
        blogs: Array.isArray(blogs.data) ? blogs.data.length : 0,
        faqs: Array.isArray(faqs.data) ? faqs.data.length : 0,
        gallery: Array.isArray(gallery.data) ? gallery.data.length : 0,
        messages: Array.isArray(messages.data) ? messages.data.length : 0,
      })

    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>{stats.events}</h3>
            <p>Events</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📰</div>
          <div className="stat-info">
            <h3>{stats.blogs}</h3>
            <p>Blog Posts</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❓</div>
          <div className="stat-info">
            <h3>{stats.faqs}</h3>
            <p>FAQs</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🖼️</div>
          <div className="stat-info">
            <h3>{stats.gallery}</h3>
            <p>Gallery Items</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📧</div>
          <div className="stat-info">
            <h3>{stats.messages}</h3>
            <p>Contact Messages</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
