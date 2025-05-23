import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text67">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <div className="team1-content10">
            <h2 className="thq-heading-2 team1-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text43">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large team1-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="team1-text47">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team1-content11">
          <div className="team1-content12">
            <div className="team1-row1">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content13">
                    <div className="team1-title1">
                      <span className="team1-text13 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text62">
                              Dr. Rajesh Patel
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text14 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text61">
                              Founder &amp; President
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text15 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text66">
                            Dr. Rajesh Patel is a renowned philanthropist with a
                            passion for community development and empowerment.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content14">
                    <div className="team1-title2">
                      <span className="team1-text16 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text53">Sarah Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text17 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text46">
                              Head of Education Programs
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text18 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text41">
                            Sarah Johnson brings years of experience in
                            education management and curriculum development to
                            our institute.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content15">
                    <div className="team1-title3">
                      <span className="team1-text19 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text65">Michael Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text20 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text44">
                              Healthcare Coordinator
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text21 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text55">
                            Michael Lee is dedicated to ensuring the well-being
                            of our community through healthcare initiatives.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content16">
                    <div className="team1-title4">
                      <span className="team1-text22 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text63">Aisha Khan</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text23 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text60">
                              Community Outreach Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text24 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text45">
                            Aisha Khan works tirelessly to connect with the
                            community and address their needs effectively.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row2">
              <div className="team1-container3">
                <div className="team1-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content17">
                    <div className="team1-title5">
                      <span className="team1-text25 thq-body-small">
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team1-text58">Juan Rodriguez</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text26 thq-body-small">
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team1-text69">
                              Skill Development Trainer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text27 thq-body-small">
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team1-text40">
                            Juan Rodriguez conducts workshops and training
                            sessions to enhance the skills of individuals in our
                            community.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content18">
                    <div className="team1-title6">
                      <span className="team1-text28 thq-body-small">
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team1-text57">Emily Chen</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text29 thq-body-small">
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team1-text54">
                              Event Coordinator
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text30 thq-body-small">
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team1-text68">
                            Emily Chen organizes engaging community events to
                            foster a sense of unity and belonging.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container4">
                <div className="team1-card7">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content19">
                    <div className="team1-title7">
                      <span className="team1-text31 thq-body-small">
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team1-text49">David Wilson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text32 thq-body-small">
                        {props.member7Job ?? (
                          <Fragment>
                            <span className="team1-text64">
                              Finance Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text33 thq-body-small">
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team1-text50">
                            David Wilson ensures the financial sustainability of
                            our institute&apos;s charitable initiatives.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons7">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card8">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content20">
                    <div className="team1-title8">
                      <span className="team1-text34 thq-body-small">
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team1-text48">Linda Garcia</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text35 thq-body-small">
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team1-text51">
                              Volunteer Coordinator
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text36 thq-body-small">
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team1-text42">
                            Linda Garcia oversees our dedicated team of
                            volunteers and ensures smooth operations.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons8">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team1-content21">
            <div className="team1-content22">
              <h2 className="thq-heading-2 team1-text37">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team1-text52">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small team1-text38">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team1-text59">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team1-text56">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member5Content: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1495568995596-9e40959aa178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content: undefined,
  member8Content: undefined,
  heading1: undefined,
  member3Job: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1615309661755-816dcd80bcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member1Alt: 'Image of Dr. Rajesh Patel',
  member4Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1512646605205-78422b7c7896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: undefined,
  content2: undefined,
  member8: undefined,
  member7: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Content: undefined,
  member8Job: undefined,
  heading2: undefined,
  member2: undefined,
  member6Job: undefined,
  member3Alt: 'Image of Michael Lee',
  member6Alt: 'Image of Emily Chen',
  member3Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Alt: 'Image of Sarah Johnson',
  actionContent: undefined,
  member6: undefined,
  member5: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjU4ODExOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content3: undefined,
  member4Job: undefined,
  member5Alt: 'Image of Juan Rodriguez',
  member1Job: undefined,
  member1: undefined,
  member4: undefined,
  member7Job: undefined,
  member4Alt: 'Image of Aisha Khan',
  member3: undefined,
  member1Content: undefined,
  member7Alt: 'Image of David Wilson',
  content1: undefined,
  member6Content: undefined,
  member8Alt: 'Image of Linda Garcia',
  member5Job: undefined,
}

Team1.propTypes = {
  member5Content: PropTypes.element,
  member8Src: PropTypes.string,
  member2Content: PropTypes.element,
  member8Content: PropTypes.element,
  heading1: PropTypes.element,
  member3Job: PropTypes.element,
  member5Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member3Src: PropTypes.string,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  content2: PropTypes.element,
  member8: PropTypes.element,
  member7: PropTypes.element,
  member6Src: PropTypes.string,
  member7Content: PropTypes.element,
  member8Job: PropTypes.element,
  heading2: PropTypes.element,
  member2: PropTypes.element,
  member6Job: PropTypes.element,
  member3Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member3Content: PropTypes.element,
  member7Src: PropTypes.string,
  member2Src: PropTypes.string,
  member2Alt: PropTypes.string,
  actionContent: PropTypes.element,
  member6: PropTypes.element,
  member5: PropTypes.element,
  member1Src: PropTypes.string,
  content3: PropTypes.element,
  member4Job: PropTypes.element,
  member5Alt: PropTypes.string,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member4: PropTypes.element,
  member7Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member3: PropTypes.element,
  member1Content: PropTypes.element,
  member7Alt: PropTypes.string,
  content1: PropTypes.element,
  member6Content: PropTypes.element,
  member8Alt: PropTypes.string,
  member5Job: PropTypes.element,
}

export default Team1
