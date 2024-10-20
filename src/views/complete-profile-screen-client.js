import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Frame32 from '../components/frame32'
import './complete-profile-screen-client.css'

const CompleteProfileScreenClient = (props) => {
  return (
    <div className="complete-profile-screen-client-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="complete-profile-screen-client-complete-profile-screen-client">
        <div className="complete-profile-screen-client-frame28">
          <img
            alt="Ellipse17220"
            src="/external/ellipse17220-wd7t-200h.png"
            className="complete-profile-screen-client-ellipse1"
          />
          <img
            alt="add7221"
            src="/external/add7221-pebr.svg"
            className="complete-profile-screen-client-add"
          />
          <div className="complete-profile-screen-client-frame29">
            <span className="complete-profile-screen-client-text10">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame30">
            <span className="complete-profile-screen-client-text12">
              <span>Enter your company or personal name</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame44">
            <span className="complete-profile-screen-client-text14">
              <span>Select Categories that describe your projects</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame38">
            <span className="complete-profile-screen-client-text16">
              <span>Enter your location</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame40">
            <span className="complete-profile-screen-client-text18">
              Select a typical budget range
            </span>
          </div>
          <div className="complete-profile-screen-client-frame43">
            <span className="complete-profile-screen-client-text19">
              Enter your email address
            </span>
          </div>
          <div className="complete-profile-screen-client-frame39">
            <span className="complete-profile-screen-client-text20">
              Select
            </span>
          </div>
          <div className="complete-profile-screen-client-frame33">
            <span className="complete-profile-screen-client-text21">
              <span>Add link to your twitter profile</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame34">
            <span className="complete-profile-screen-client-text23">
              <span>Add link to your Farcaster profile</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame35">
            <span className="complete-profile-screen-client-text25">
              <span>Add link to your Github profile</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame36">
            <span className="complete-profile-screen-client-text27">
              <span>Add link to your Linkedin profile</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-frame37">
            <span className="complete-profile-screen-client-text29">
              <span>Add link to your website</span>
            </span>
          </div>
          <Frame32
            text={
              <Fragment>
                <span className="complete-profile-screen-client-text31">
                  Describe yourself/company or the types of freelancers you’re
                  looking to hire
                </span>
              </Fragment>
            }
            rootClassName="frame32root-class-name"
          ></Frame32>
          <span className="complete-profile-screen-client-text32">
            <span>Primary Name</span>
          </span>
          <span className="complete-profile-screen-client-text34">
            <span>(Basename)</span>
          </span>
          <span className="complete-profile-screen-client-text36">
            <span>Company Name</span>
          </span>
          <span className="complete-profile-screen-client-text38">
            <span>Project Categories</span>
          </span>
          <span className="complete-profile-screen-client-text40">
            <span>About You or Your Company</span>
          </span>
          <span className="complete-profile-screen-client-text42">
            <span>Socials</span>
          </span>
          <span className="complete-profile-screen-client-text44">
            <span>Twitter/X</span>
          </span>
          <span className="complete-profile-screen-client-text46">
            <span>Farcaster</span>
          </span>
          <span className="complete-profile-screen-client-text48">
            <span>Github</span>
          </span>
          <span className="complete-profile-screen-client-text50">
            <span>Linkedin</span>
          </span>
          <span className="complete-profile-screen-client-text52">
            <span>Website</span>
          </span>
          <span className="complete-profile-screen-client-text54">
            <span>Location</span>
          </span>
          <span className="complete-profile-screen-client-text56">
            <span>Preferred Freelancer Experience Level</span>
          </span>
          <span className="complete-profile-screen-client-text58">
            <span>Typical Project Budgets</span>
          </span>
          <div className="complete-profile-screen-client-frame12">
            <span className="complete-profile-screen-client-text60">
              <span>
                Save and Continue
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <span className="complete-profile-screen-client-text62">
            <span>Email</span>
          </span>
        </div>
        <span className="complete-profile-screen-client-text64">
          <span>Set Up Your Profile</span>
        </span>
        <div className="complete-profile-screen-client-frame50">
          <img
            alt="menu7211"
            src="/external/menu7211-0qxv.svg"
            className="complete-profile-screen-client-menu"
          />
          <div className="complete-profile-screen-client-group2">
            <span className="complete-profile-screen-client-text66">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <div className="complete-profile-screen-client-group7">
            <span className="complete-profile-screen-client-text68">
              <span>wu</span>
            </span>
            <span className="complete-profile-screen-client-text70">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompleteProfileScreenClient
