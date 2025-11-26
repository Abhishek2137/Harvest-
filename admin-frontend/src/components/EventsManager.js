import React, { useState, useEffect } from 'react'
import { apiClient, uploadFile } from '../utils/api'
import './EventsManager.css'

const EventsManager = ({ apiBaseUrl }) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    is_featured: false,
    is_active: true,
  })

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const client = apiClient(apiBaseUrl)
      const response = await client.get('/events?active_only=false')
      setEvents(response.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const client = apiClient(apiBaseUrl)
      if (editing) {
        await client.put(`/events/${editing.id}`, formData)
      } else {
        await client.post('/events', formData)
      }
      resetForm()
      fetchEvents()
    } catch (error) {
      alert('Error saving event: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleEdit = (event) => {
    setEditing(event)
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      is_featured: event.is_featured,
      is_active: event.is_active,
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return
    try {
      const client = apiClient(apiBaseUrl)
      await client.delete(`/events/${id}`)
      fetchEvents()
    } catch (error) {
      alert('Error deleting event: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleImageUpload = async (file, eventId) => {
    try {
      await uploadFile(apiBaseUrl, `/events/${eventId}/upload-image`, file)
      fetchEvents()
      alert('Image uploaded successfully!')
    } catch (error) {
      alert('Error uploading image: ' + (error.response?.data?.detail || error.message))
    }
  }

  const resetForm = () => {
    setEditing(null)
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      is_featured: false,
      is_active: true,
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="events-manager">
      <h1>Events Manager</h1>

      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="4"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.is_featured}
              onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
            />
            Featured
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
            />
            Active
          </label>
        </div>
        {editing && (
          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files[0]) {
                  handleImageUpload(e.target.files[0], editing.id)
                }
              }}
            />
          </div>
        )}
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
        {editing && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="events-list">
        <h2>Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              {event.image && <img src={event.image} alt={event.title} />}
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description.substring(0, 100)}...</p>
                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                </div>
                <div className="event-actions">
                  <button onClick={() => handleEdit(event)}>Edit</button>
                  <button onClick={() => handleDelete(event.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsManager

