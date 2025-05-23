import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features11-text17">
                    Empowering Communities Through Education, Healthcare, and
                    Social Welfare Initiatives
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features11-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features11-text23">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features11-text20">
                  Explore the key features of Raje Shivchatrapati Multipurpose
                  Charitable Institute.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features11-content1">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features11-text15">
                        Educational Programs
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features11-text16">
                        Offering a range of educational programs to empower
                        individuals with knowledge and skills.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features11-text14">
                        Health Initiatives
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features11-text22">
                        Providing healthcare initiatives to ensure the
                        well-being of community members.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features11-text18">
                        Skill Development Workshops
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features11-text19">
                        Conducting workshops to enhance skills and promote
                        personal growth within the community.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features11-text13">Get Involved</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features11-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features11-text21">Donate</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  mainAction: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1581092157699-83c90752400a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2ImageAlt: 'Health Initiatives Image',
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Skill Development Workshops Image',
  feature1ImageAlt: 'Educational Programs Image',
  sectionDescription: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1551295022-de5522c94e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features11.propTypes = {
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features11
