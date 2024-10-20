import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile-completion-freelancer.css'

const ProfileCompletionFreelancer = (props) => {
  return (
    <div className="profile-completion-freelancer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-completion-freelancer-profile-completion-freelancer">
        <img
          alt="menu6745"
          src="/external/menu6745-wv0w.svg"
          className="profile-completion-freelancer-menu"
        />
        <Link
          to="/profile-screen-freelancer"
          className="profile-completion-freelancer-navlink1"
        >
          <div className="profile-completion-freelancer-group2">
            <span className="profile-completion-freelancer-text10">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
        </Link>
        <div className="profile-completion-freelancer-group7">
          <span className="profile-completion-freelancer-text12">
            <span>wu</span>
          </span>
          <span className="profile-completion-freelancer-text14">
            <span>hks</span>
          </span>
        </div>
        <span className="profile-completion-freelancer-text16">
          <span className="profile-completion-freelancer-text17">
            Welcome,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="profile-completion-freelancer-text19"></span>
          <span className="profile-completion-freelancer-text20">
            the-dote-sama.base.eth
          </span>
          <span>!</span>
          <br></br>
          <span>
            You’re all set to explore
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            opportunities and connect
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>with prospective clients.</span>
        </span>
        <div className="profile-completion-freelancer-frame25">
          <span className="profile-completion-freelancer-text28">
            <span>Find Jobs</span>
          </span>
        </div>
        <Link
          to="/dashboard-freelancer"
          className="profile-completion-freelancer-navlink2"
        >
          <div className="profile-completion-freelancer-frame26">
            <span className="profile-completion-freelancer-text30">
              <span>Go to Dashboard</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCompletionFreelancer
