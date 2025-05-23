import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Name: 'Sarah Johnson',
  review1:
    'I am grateful for the support provided by Raje Shivchatrapati Multipurpose Charitable Institute. They have truly made a difference in the community.',
  author1Position: 'CEO, ABC Company',
  author3Src:
    'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4NTk0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Read what our beneficiaries have to say about their experience with Raje Shivchatrapati Multipurpose Charitable Institute.',
  author1Src:
    'https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4NTk0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  author3Position: 'Director, PQR Foundation',
  heading1: 'Testimonials',
  author4Src:
    'https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4NTk0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Jane Smith',
  author3Alt: 'Image of David Williams',
  review4:
    "I have witnessed firsthand the impact of the institute's initiatives. Their commitment to serving the community is commendable.",
  author2Position: 'Founder, XYZ Organization',
  review2:
    'The programs offered by the institute have had a positive impact on the lives of many individuals. I highly recommend their services.',
  author2Src:
    'https://images.unsplash.com/photo-1604681938045-0ba52ca43894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4NTk0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Position: 'Manager, LMN Corporation',
  author3Name: 'David Williams',
  author1Alt: 'Image of John Doe',
  review3:
    'Raje Shivchatrapati Multipurpose Charitable Institute is dedicated to making a meaningful change in society. I am proud to be associated with them.',
  author4Alt: 'Image of Sarah Johnson',
}

Testimonial.propTypes = {
  author4Name: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author3Src: PropTypes.string,
  content1: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  heading1: PropTypes.string,
  author4Src: PropTypes.string,
  author2Name: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  review3: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial
