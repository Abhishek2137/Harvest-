import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <Link to="/">
              <img
                alt="HĀRVÉST (Holistic Advancement for Rural Vitality, Empowerment, and Sustainable Transformation) Logo"
                src="/rajeshivlogo-1500h.jpg"
                className="footer-image1"
              />
            </Link>
            <span className="thq-body-small">
              Subscribe to our newsletter for the latest updates on new features
              and product releases.
            </span>
            <div className="footer-actions">
              <div className="footer-form">
                <div className="footer-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer-button">
                  <span className="thq-body-small">Subscribe</span>
                </button>
              </div>
              <span className="footer-content2 thq-body-small">
                Stay connected with us for updates on our charitable activities.
              </span>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <strong className="thq-body-large footer-column1-title">
                Quick Links
              </strong>
              <div className="footer-footer-links1">
                <Link to="/" className="thq-body-small">Home</Link>
                <Link to="/about" className="thq-body-small">About Us</Link>
                <Link to="/services" className="thq-body-small">Services</Link>
                <Link to="/events" className="thq-body-small">Events</Link>
                <Link to="/donate" className="thq-body-small">Donate</Link>
              </div>
            </div>
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                Connect With Us
              </strong>
              <div className="footer-footer-links2">
                <Link to="/volunteer" className="thq-body-small">Volunteer</Link>
                <Link to="/gallery" className="thq-body-small">Gallery</Link>
                <Link to="/contact" className="thq-body-small">Contact Us</Link>
                <Link to="/blog" className="thq-body-small">Blog</Link>
                <Link to="/faq" className="thq-body-small">FAQs</Link>
              </div>
            </div>
            <div className="footer-column3">
              <strong className="thq-body-large footer-social-link1-title">
                Follow Us
              </strong>
              <div className="footer-social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link14">
                  <svg viewBox="0 0 877.7142857142857 1024" className="thq-icon-small">
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link15">
                  <svg viewBox="0 0 877.7142857142857 1024" className="thq-icon-small">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="thq-body-small">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link16">
                  <svg viewBox="0 0 950.8571428571428 1024" className="thq-icon-small">
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <span className="thq-body-small">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">
              © 2024 HĀRVÉST (Holistic Advancement for Rural Vitality, Empowerment, and Sustainable Transformation), Aurangabad. All Rights Reserved.
            </span>
            <div className="footer-footer-links3">
              <Link to="/privacy-policy" className="thq-body-small">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="thq-body-small">Terms & Conditions</Link>
              <Link to="/cookie-policy" className="thq-body-small">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
