import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './navafterloginscreen-freelancer.css'

const NavafterloginscreenFreelancer = (props) => {
  return (
    <div className="navafterloginscreen-freelancer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="navafterloginscreen-freelancer-navafterloginscreen-freelancer">
        <div className="navafterloginscreen-freelancer-frame13"></div>
        <img
          alt="close7923"
          src="/external/close7923-tiv.svg"
          className="navafterloginscreen-freelancer-close"
        />
        <span className="navafterloginscreen-freelancer-text10">
          <span>Home</span>
        </span>
        <Link
          to="/dashboard-freelancer"
          className="navafterloginscreen-freelancer-text12"
        >
          <span>Dashboard</span>
        </Link>
        <span className="navafterloginscreen-freelancer-text14">
          <span>My Profile</span>
        </span>
        <span className="navafterloginscreen-freelancer-text16">
          <span>Find Jobs</span>
        </span>
        <span className="navafterloginscreen-freelancer-text18">
          <span>Messages</span>
        </span>
        <Link
          to="/notifications-screen-freelancer1"
          className="navafterloginscreen-freelancer-text20"
        >
          <span>Notifications</span>
        </Link>
        <Link
          to="/my-jobs-screen-freelancer"
          className="navafterloginscreen-freelancer-text22"
        >
          <span>My Jobs</span>
        </Link>
        <span className="navafterloginscreen-freelancer-text24">
          <span>Earnings</span>
        </span>
        <span className="navafterloginscreen-freelancer-text26">
          <span>Support</span>
        </span>
        <span className="navafterloginscreen-freelancer-text28">
          <span>Sign Out</span>
        </span>
        <Link
          to="/settings-screen-freelancer"
          className="navafterloginscreen-freelancer-text30"
        >
          <span>Settings</span>
        </Link>
        <div className="navafterloginscreen-freelancer-group7">
          <span className="navafterloginscreen-freelancer-text32">
            <span>wu</span>
          </span>
          <span className="navafterloginscreen-freelancer-text34">
            <span>hks</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavafterloginscreenFreelancer
