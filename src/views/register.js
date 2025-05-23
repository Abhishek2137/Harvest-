import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import './register.css'

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Here you would typically handle the registration logic
    console.log('Registration attempt:', registerData)
    alert('Registration functionality will be implemented soon!')
  }

  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Register - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="register-split-screen">
        <div className="register-left">
          <div className="register-overlay"></div>
          <div className="register-content-left">
            <h1>Join Our Community</h1>
            <p>Create an account to start making a difference today</p>
          </div>
        </div>
        <div className="register-right">
          <div className="register-form-container">
            <div className="register-header">
              <h2>Create Account</h2>
              <p>Fill in your details to get started</p>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-group">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={registerData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-group">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange}
                    required
                    placeholder="Create a password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div className="form-agreement">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                </label>
              </div>
              <button type="submit" className="register-button">Create Account</button>
              <div className="social-register">
                <p>Or register with</p>
                <div className="social-buttons">
                  <button type="button" className="social-button google">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="social-button facebook">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="register-footer">
              <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register 