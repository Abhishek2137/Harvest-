import React, { useState, useEffect } from 'react'
import { apiClient, uploadFile } from '../utils/api'
import './PageContentManager.css'

const PageContentManager = ({ apiBaseUrl }) => {
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    page: 'home',
    section: 'hero',
    field_name: '',
    text_content: '',
    image_url: '',
    image_alt: '',
    order: 0,
    is_active: true,
  })
  const [filterPage, setFilterPage] = useState('')
  const [filterSection, setFilterSection] = useState('')

  useEffect(() => {
    fetchContents()
  }, [filterPage, filterSection])

  const fetchContents = async () => {
    try {
      const client = apiClient(apiBaseUrl)
      const params = {}
      if (filterPage) params.page = filterPage
      if (filterSection) params.section = filterSection

      const response = await client.get('/api/page-content', { params })
      setContents(response.data)
    } catch (error) {
      console.error('Error fetching contents:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const client = apiClient(apiBaseUrl)
      if (editing) {
        await client.put(`/api/page-content/${editing.id}`, formData)
      } else {
        await client.post('/api/page-content', formData)
      }
      setEditing(null)
      setFormData({
        page: 'home',
        section: 'hero',
        field_name: '',
        text_content: '',
        image_url: '',
        image_alt: '',
        order: 0,
        is_active: true,
      })
      fetchContents()
    } catch (error) {
      alert('Error saving content: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleEdit = (content) => {
    setEditing(content)
    setFormData({
      page: content.page,
      section: content.section,
      field_name: content.field_name,
      text_content: content.text_content || '',
      image_url: content.image_url || '',
      image_alt: content.image_alt || '',
      order: content.order,
      is_active: content.is_active,
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this content?')) return
    try {
      const client = apiClient(apiBaseUrl)
      await client.delete(`/api/page-content/${id}`)
      fetchContents()
    } catch (error) {
      alert('Error deleting content: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleImageUpload = async (file, contentId) => {
    try {
      const result = await uploadFile(
        apiBaseUrl,
        `/api/page-content/${contentId}/upload-image`,
        file,
        { alt_text: formData.image_alt }
      )

      setFormData({ ...formData, image_url: result.image_url })
      fetchContents()
    } catch (error) {
      alert('Error uploading image: ' + (error.response?.data?.detail || error.message))
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="page-content-manager">
      <h1>Page Content Manager</h1>

      <div className="filters">
        <select value={filterPage} onChange={(e) => setFilterPage(e.target.value)}>
          <option value="">All Pages</option>
          <option value="home">Home</option>
          <option value="about">About</option>
          <option value="services">Services</option>
          <option value="contact">Contact</option>
          <option value="donate">Donate</option>
          <option value="events">Events</option>
          <option value="volunteer">Volunteer</option>
          <option value="gallery">Gallery</option>
          <option value="blog">Blog</option>
          <option value="faq">FAQ</option>
        </select>

        <select value={filterSection} onChange={(e) => setFilterSection(e.target.value)}>
          <option value="">All Sections</option>
          <option value="hero">Hero</option>
          <option value="features">Features</option>
          <option value="cta">CTA</option>
          <option value="testimonial">Testimonial</option>
          <option value="footer">Footer</option>
          <option value="navbar">Navbar</option>
        </select>

        <button
          onClick={() => {
            setEditing(null)
            setFormData({
              page: 'home',
              section: 'hero',
              field_name: '',
              text_content: '',
              image_url: '',
              image_alt: '',
              order: 0,
              is_active: true,
            })
          }}
        >
          Add New
        </button>
      </div>

      <form onSubmit={handleSubmit} className="content-form">
        <div className="form-row">
          <div className="form-group">
            <label>Page</label>
            <select
              value={formData.page}
              onChange={(e) => setFormData({ ...formData, page: e.target.value })}
              required
            >
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="services">Services</option>
              <option value="contact">Contact</option>
              <option value="donate">Donate</option>
              <option value="events">Events</option>
              <option value="volunteer">Volunteer</option>
              <option value="gallery">Gallery</option>
              <option value="blog">Blog</option>
              <option value="faq">FAQ</option>
            </select>
          </div>

          <div className="form-group">
            <label>Section</label>
            <select
              value={formData.section}
              onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              required
            >
              <option value="hero">Hero</option>
              <option value="features">Features</option>
              <option value="cta">CTA</option>
              <option value="testimonial">Testimonial</option>
              <option value="footer">Footer</option>
              <option value="navbar">Navbar</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Field Name</label>
          <input
            type="text"
            value={formData.field_name}
            onChange={(e) => setFormData({ ...formData, field_name: e.target.value })}
            required
            placeholder="e.g., heading1, content1"
          />
        </div>

        <div className="form-group">
          <label>Text Content</label>
          <textarea
            value={formData.text_content}
            onChange={(e) => setFormData({ ...formData, text_content: e.target.value })}
            rows="4"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Image Alt Text</label>
            <input
              type="text"
              value={formData.image_alt}
              onChange={(e) => setFormData({ ...formData, image_alt: e.target.value })}
            />
          </div>
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

        <div className="form-row">
          <div className="form-group">
            <label>Order</label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) =>
                setFormData({ ...formData, order: parseInt(e.target.value) })
              }
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
              />
              Active
            </label>
          </div>
        </div>

        <button type="submit">{editing ? 'Update' : 'Create'}</button>
        {editing && <button type="button" onClick={() => setEditing(null)}>Cancel</button>}
      </form>

      <div className="contents-list">
        <h2>Existing Contents</h2>
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>Section</th>
              <th>Field</th>
              <th>Content Preview</th>
              <th>Order</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contents.map((content) => (
              <tr key={content.id}>
                <td>{content.page}</td>
                <td>{content.section}</td>
                <td>{content.field_name}</td>
                <td>
                  {content.text_content?.substring(0, 50) ||
                    content.image_url?.substring(0, 50) ||
                    '-'}
                </td>
                <td>{content.order}</td>
                <td>{content.is_active ? '✓' : '✗'}</td>
                <td>
                  <button onClick={() => handleEdit(content)}>Edit</button>
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default PageContentManager
