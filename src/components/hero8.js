import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text7">
                    Welcome to Raje Shivchatrapati Multipurpose Charitable
                    Institute
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero8-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text5">
                    Empowering communities through education, healthcare, and
                    social welfare initiatives
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text8">Donate Now</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <link to ="/donate">
              <button className="thq-button-outline hero8-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text6">Get Involved</span>
                    </Fragment>
                  )}
                </span>
              </button>
              </link>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Alt: 'Image of students studying together',
  content1: undefined,
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1579619674614-5de0e3953f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
