import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile-creation-screen.css'

const ProfileCreationScreen = (props) => {
  return (
    <div className="profile-creation-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-creation-screen-profile-creation-screen">
        <div className="profile-creation-screen-group7">
          <span className="profile-creation-screen-text10">
            <span>wu</span>
          </span>
          <span className="profile-creation-screen-text12">
            <span>hks</span>
          </span>
        </div>
        <span className="profile-creation-screen-text14">
          <span>Choose Your Role</span>
        </span>
        <div className="profile-creation-screen-frame26">
          <Link
            to="/profile-completion-freelancer"
            className="profile-creation-screen-navlink"
          >
            <div className="profile-creation-screen-radiobuttonunchecked1"></div>
          </Link>
          <span className="profile-creation-screen-text16">
            <span>Freelancer</span>
          </span>
          <img
            alt="DigitalNomad722"
            src="/external/digitalnomad722-98q.svg"
            className="profile-creation-screen-digital-nomad"
          />
        </div>
        <div className="profile-creation-screen-frame27">
          <img
            alt="radiobuttonunchecked4914"
            src="/external/radiobuttonunchecked4914-d7ut.svg"
            className="profile-creation-screen-radiobuttonunchecked2"
          />
          <span className="profile-creation-screen-text18">
            <span>Client</span>
          </span>
        </div>
        <div className="profile-creation-screen-frame12">
          <span className="profile-creation-screen-text20">
            <span>Continue</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCreationScreen
