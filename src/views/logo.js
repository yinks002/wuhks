import React from 'react'

import { Helmet } from 'react-helmet'

import './logo.css'

const Logo = (props) => {
  return (
    <div className="logo-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="logo-logo">
        <div className="logo-group7">
          <span className="logo-text1">
            <span>wu</span>
          </span>
          <span className="logo-text3">
            <span>hks</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Logo
