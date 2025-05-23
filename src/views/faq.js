import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './faq.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Raje Shivchatrapati Institute?',
      answer: 'Raje Shivchatrapati Institute is a charitable organization dedicated to providing education, healthcare, and community development services to underprivileged communities in Maharashtra.'
    },
    {
      question: 'How can I donate to the institute?',
      answer: 'You can donate through our website using the Donate page, or contact us directly for other donation methods. We accept both online and offline donations.'
    },
    {
      question: 'How can I volunteer with the institute?',
      answer: 'You can apply to volunteer through our Volunteer page. We have various opportunities in education, healthcare, community outreach, and administrative support.'
    },
    {
      question: 'What programs does the institute offer?',
      answer: 'We offer various programs including educational support, healthcare services, skill development training, and community development initiatives.'
    },
    {
      question: 'How can I apply for educational support?',
      answer: 'You can apply for educational support by visiting our office or contacting us through the Contact page. We will guide you through the application process.'
    },
    {
      question: 'Are donations tax-deductible?',
      answer: 'Yes, all donations to Raje Shivchatrapati Institute are tax-deductible under Section 80G of the Income Tax Act.'
    },
    {
      question: 'How can I stay updated about institute activities?',
      answer: 'You can subscribe to our newsletter through the footer, follow us on social media, or regularly check our Blog page for updates.'
    },
    {
      question: 'Can I sponsor a specific program?',
      answer: 'Yes, you can sponsor specific programs. Please contact us through the Contact page to discuss sponsorship opportunities.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQs - Raje Shivchatrapati Institute</title>
        <meta property="og:title" content="FAQs - Raje Shivchatrapati Institute" />
      </Helmet>
      <Navbar />
      <div className="faq-main">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="faq-search-input"
          />
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>If you couldn't find the answer you're looking for, please feel free to contact us.</p>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQ 