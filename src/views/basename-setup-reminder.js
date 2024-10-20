import React from 'react'

import { Helmet } from 'react-helmet'

import './basename-setup-reminder.css'

const BasenameSetupReminder = (props) => {
  return (
    <div className="basename-setup-reminder-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="basename-setup-reminder-basename-setup-reminder">
        <span className="basename-setup-reminder-text10">
          <span>Don’t forget to secure your</span>
          <br></br>
          <span>Basename for your onchain</span>
          <br></br>
          <span>identity</span>
        </span>
        <img
          alt="Rectangle56714"
          src="/external/rectangle56714-fto5-200h.png"
          className="basename-setup-reminder-rectangle5"
        />
        <div className="basename-setup-reminder-frame25">
          <span className="basename-setup-reminder-text16">
            <span>Get a Basename</span>
          </span>
        </div>
        <div className="basename-setup-reminder-frame26">
          <span className="basename-setup-reminder-text18">
            <span>Skip for Now</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BasenameSetupReminder
