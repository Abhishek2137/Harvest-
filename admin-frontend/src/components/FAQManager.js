import React, { useState, useEffect } from 'react'
import { apiClient } from '../utils/api'
import './FAQManager.css'

const FAQManager = ({ apiBaseUrl }) => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    order: 0,
    is_active: true,
  })

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    try {
      const client = apiClient(apiBaseUrl)
      const response = await client.get('/faqs?active_only=false')
      setFaqs(response.data)
    } catch (error) {
      console.error('Error fetching FAQs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const client = apiClient(apiBaseUrl)
      if (editing) {
        await client.put(`/faqs/${editing.id}`, formData)
      } else {
        await client.post('/faqs', formData)
      }
      resetForm()
      fetchFAQs()
    } catch (error) {
      alert('Error saving FAQ: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleEdit = (faq) => {
    setEditing(faq)
    setFormData({
      question: faq.question,
      answer: faq.answer,
      order: faq.order,
      is_active: faq.is_active,
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) return
    try {
      const client = apiClient(apiBaseUrl)
      await client.delete(`/faqs/${id}`)
      fetchFAQs()
    } catch (error) {
      alert('Error deleting FAQ: ' + (error.response?.data?.detail || error.message))
    }
  }

  const resetForm = () => {
    setEditing(null)
    setFormData({
      question: '',
      answer: '',
      order: 0,
      is_active: true,
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="faq-manager">
      <h1>FAQ Manager</h1>

      <form onSubmit={handleSubmit} className="faq-form">
        <div className="form-group">
          <label>Question</label>
          <input
            type="text"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Answer</label>
          <textarea
            value={formData.answer}
            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
            rows="5"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Order</label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              />
              Active
            </label>
          </div>
        </div>
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
        {editing && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="faqs-list">
        <h2>FAQs</h2>
        <div className="faqs-grid">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-card">
              <div className="faq-header">
                <h3>{faq.question}</h3>
                <span className={`status ${faq.is_active ? 'active' : 'inactive'}`}>
                  {faq.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p className="faq-answer">{faq.answer}</p>
              <div className="faq-meta">
                <span>Order: {faq.order}</span>
              </div>
              <div className="faq-actions">
                <button onClick={() => handleEdit(faq)}>Edit</button>
                <button onClick={() => handleDelete(faq.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQManager

