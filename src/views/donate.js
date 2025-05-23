import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './donate.css'

const Donate = () => {
  const [donationData, setDonationData] = useState({
    amount: '',
    customAmount: '',
    name: '',
    email: '',
    phone: '',
    panCard: '',
    message: ''
  })

  const predefinedAmounts = [500, 1000, 2000, 5000]

  const handleChange = (e) => {
    const { name, value } = e.target
    setDonationData({
      ...donationData,
      [name]: value,
      amount: name === 'customAmount' ? value : donationData.amount
    })
  }

  const handleAmountSelect = (amount) => {
    setDonationData({
      ...donationData,
      amount: amount.toString(),
      customAmount: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the donation processing
    console.log('Donation attempt:', donationData)
    alert('Thank you for your generous donation! We will process your contribution soon.')
  }

  return (
    <div className="donate-container">
      <Helmet>
        <title>Donate - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="Donate - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="donate-hero">
        <div className="donate-hero-content">
          <h1>Make a Difference Today</h1>
          <p>Your contribution helps us create positive change in our community</p>
        </div>
      </div>
      <div className="donate-main">
        <div className="donate-grid">
          <div className="donate-info-card">
            <div className="info-section">
              <h2>Your Impact</h2>
              <div className="impact-list">
                {predefinedAmounts.map((amount) => (
                  <div key={amount} className="impact-item" onClick={() => handleAmountSelect(amount)}>
                    <div className="impact-amount">₹{amount}</div>
                    <div className="impact-description">
                      {amount === 500 && "Provides educational materials for one student"}
                      {amount === 1000 && "Supports healthcare services for a family"}
                      {amount === 2000 && "Funds skill development training for youth"}
                      {amount === 5000 && "Enables community development programs"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="info-section">
              <h2>Why Donate?</h2>
              <ul className="benefits-list">
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Tax benefits under Section 80G</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>100% of donations go to programs</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Regular updates on impact</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Transparent fund utilization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="donate-form-container">
            <form className="donate-form" onSubmit={handleSubmit}>
              <h2>Make Your Donation</h2>
              <div className="amount-section">
                <label>Select Amount</label>
                <div className="amount-options">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-button ${donationData.amount === amount.toString() ? 'selected' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="currency-symbol">₹</span>
                    <input
                      type="number"
                      id="customAmount"
                      name="customAmount"
                      value={donationData.customAmount}
                      onChange={handleChange}
                      placeholder="Enter custom amount"
                      min="100"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-group">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={donationData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donationData.email}
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
                      value={donationData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="panCard">PAN Card Number (for tax benefits)</label>
                <div className="input-group">
                  <i className="fas fa-id-card"></i>
                  <input
                    type="text"
                    id="panCard"
                    name="panCard"
                    value={donationData.panCard}
                    onChange={handleChange}
                    placeholder="Enter PAN card number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={donationData.message}
                  onChange={handleChange}
                  placeholder="Leave a message with your donation"
                  rows="3"
                />
              </div>

              <button type="submit" className="donate-button">
                Donate ₹{donationData.customAmount || donationData.amount || '0'}
              </button>

              <div className="secure-payment">
                <i className="fas fa-lock"></i>
                <span>Secure Payment | 256-bit SSL Encrypted</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate 