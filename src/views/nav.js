import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './nav.css'

const Nav = (props) => {
  return (
    <div className="nav-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="nav-nav">
        <div className="nav-frame13"></div>
        <div className="nav-frame43">
          <span className="nav-text10">
            <span>Home</span>
          </span>
        </div>
        <div className="nav-frame44">
          <span className="nav-text12">
            <span>How it work</span>
          </span>
        </div>
        <div className="nav-frame45">
          <span className="nav-text14">
            <span>About Us</span>
          </span>
        </div>
        <div className="nav-frame46">
          <span className="nav-text16">
            <span>Blog</span>
          </span>
        </div>
        <div className="nav-frame47">
          <span className="nav-text18">
            <span>Support</span>
          </span>
        </div>
        <Link to="/freelancerd-app-screen" className="nav-navlink1">
          <div className="nav-frame12">
            <span className="nav-text20">
              <span>Launch dApp</span>
            </span>
          </div>
        </Link>
        <div className="nav-frame42">
          <div className="nav-group7">
            <span className="nav-text22">
              <span>wu</span>
            </span>
            <span className="nav-text24">
              <span>hks</span>
            </span>
          </div>
          <Link to="/" className="nav-navlink2">
            <img
              alt="close6989"
              src="/external/close6989-1uhb.svg"
              className="nav-close"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
