import React, { useState, useEffect } from 'react'
import { apiClient } from '../utils/api'
import './ContactManager.css'

const ContactManager = ({ apiBaseUrl }) => {
  const [contactInfo, setContactInfo] = useState(null)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    facebook_url: '',
    instagram_url: '',
    twitter_url: '',
    is_active: true,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const client = apiClient(apiBaseUrl)
      const [infoResponse, messagesResponse] = await Promise.all([
        client.get('/contact-info').catch(() => ({ data: null })),
        client.get('/contact-messages'),
      ])
      setContactInfo(infoResponse.data)
      setMessages(messagesResponse.data)
      if (infoResponse.data) {
        setFormData({
          email: infoResponse.data.email || '',
          phone: infoResponse.data.phone || '',
          address: infoResponse.data.address || '',
          facebook_url: infoResponse.data.facebook_url || '',
          instagram_url: infoResponse.data.instagram_url || '',
          twitter_url: infoResponse.data.twitter_url || '',
          is_active: infoResponse.data.is_active,
        })
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const client = apiClient(apiBaseUrl)
      if (contactInfo) {
        await client.put(`/contact-info/${contactInfo.id}`, formData)
      } else {
        await client.post('/contact-info', formData)
      }
      fetchData()
      alert('Contact information saved successfully!')
    } catch (error) {
      alert('Error saving contact info: ' + (error.response?.data?.detail || error.message))
    }
  }

  const markAsRead = async (id) => {
    try {
      const client = apiClient(apiBaseUrl)
      await client.put(`/contact-messages/${id}/mark-read`)
      fetchData()
    } catch (error) {
      alert('Error updating message: ' + (error.response?.data?.detail || error.message))
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="contact-manager">
      <h1>Contact Manager</h1>

      <div className="contact-sections">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label>Facebook URL</label>
              <input
                type="url"
                value={formData.facebook_url}
                onChange={(e) => setFormData({ ...formData, facebook_url: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Instagram URL</label>
              <input
                type="url"
                value={formData.instagram_url}
                onChange={(e) => setFormData({ ...formData, instagram_url: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Twitter URL</label>
              <input
                type="url"
                value={formData.twitter_url}
                onChange={(e) => setFormData({ ...formData, twitter_url: e.target.value })}
              />
            </div>
            <button type="submit">Save Contact Information</button>
          </form>
        </div>

        <div className="messages-section">
          <h2>Contact Messages ({messages.length})</h2>
          <div className="messages-list">
            {messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              messages.map((message) => (
                <div key={message.id} className={`message-card ${message.is_read ? 'read' : 'unread'}`}>
                  <div className="message-header">
                    <div>
                      <strong>{message.name}</strong>
                      <span className="message-email">{message.email}</span>
                    </div>
                    <span className="message-date">
                      {new Date(message.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="message-subject">
                    <strong>Subject:</strong> {message.subject}
                  </div>
                  <div className="message-body">{message.message}</div>
                  {!message.is_read && (
                    <button onClick={() => markAsRead(message.id)} className="mark-read-btn">
                      Mark as Read
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactManager

