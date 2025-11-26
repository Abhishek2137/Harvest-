import React, { useState, useEffect } from 'react'
import { apiClient, uploadFile } from '../utils/api'
import './BlogsManager.css'

const BlogsManager = ({ apiBaseUrl }) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    published: false,
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const client = apiClient(apiBaseUrl)
      const response = await client.get('/blogs?published_only=false')
      setBlogs(response.data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const client = apiClient(apiBaseUrl)
      if (editing) {
        await client.put(`/blogs/${editing.id}`, formData)
      } else {
        await client.post('/blogs', formData)
      }
      resetForm()
      fetchBlogs()
    } catch (error) {
      alert('Error saving blog: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleEdit = (blog) => {
    setEditing(blog)
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content || '',
      category: blog.category,
      published: blog.published,
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return
    try {
      const client = apiClient(apiBaseUrl)
      await client.delete(`/blogs/${id}`)
      fetchBlogs()
    } catch (error) {
      alert('Error deleting blog: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleImageUpload = async (file, blogId) => {
    try {
      await uploadFile(apiBaseUrl, `/blogs/${blogId}/upload-image`, file)
      fetchBlogs()
      alert('Image uploaded successfully!')
    } catch (error) {
      alert('Error uploading image: ' + (error.response?.data?.detail || error.message))
    }
  }

  const handleAddBlogImage = async (file, blogId) => {
    try {
      await uploadFile(apiBaseUrl, `/blogs/images`, file, {
        blog_post_id: blogId,
      })
      fetchBlogs()
      alert('Image added successfully!')
    } catch (error) {
      alert('Error adding image: ' + (error.response?.data?.detail || error.message))
    }
  }

  const resetForm = () => {
    setEditing(null)
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'General',
      published: false,
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="blogs-manager">
      <h1>Blogs Manager</h1>

      <form onSubmit={handleSubmit} className="blog-form">
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
          <label>Excerpt</label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            rows="3"
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows="10"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="General">General</option>
              <option value="Events">Events</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Culture">Culture</option>
              <option value="Community">Community</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              />
              Published
            </label>
          </div>
        </div>
        {editing && (
          <>
            <div className="form-group">
              <label>Upload Main Image</label>
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
            <div className="form-group">
              <label>Add Additional Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    handleAddBlogImage(e.target.files[0], editing.id)
                  }
                }}
              />
            </div>
          </>
        )}
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
        {editing && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="blogs-list">
        <h2>Blog Posts</h2>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.image && <img src={blog.image} alt={blog.title} />}
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p className="excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span>📁 {blog.category}</span>
                  <span>{blog.published ? '✅ Published' : '⏸️ Draft'}</span>
                </div>
                <div className="blog-actions">
                  <button onClick={() => handleEdit(blog)}>Edit</button>
                  <button onClick={() => handleDelete(blog.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsManager

