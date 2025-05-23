import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import './login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempt:', loginData)
    alert('Login functionality will be implemented soon!')
  }

  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Login - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="login-split-screen">
        <div className="login-left">
          <div className="login-overlay"></div>
          <div className="login-content-left">
            <h1>Welcome Back</h1>
            <p>Join us in making a difference in our community</p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>Sign In</h2>
              <p>Please sign in to continue</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
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
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className="login-button">Sign In</button>
              <div className="social-login">
                <p>Or sign in with</p>
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
            <div className="login-footer">
              <p>Don't have an account? <Link to="/register">Create Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login 