import React from 'react'

import { Helmet } from 'react-helmet'

import './request-revision-text-box.css'

const RequestRevisionTextBox = (props) => {
  return (
    <div className="request-revision-text-box-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="request-revision-text-box-request-revision-text-box">
        <div className="request-revision-text-box-frame54">
          <span className="request-revision-text-box-text1">
            <span>Enter comments here</span>
          </span>
        </div>
        <div className="request-revision-text-box-frame12">
          <span className="request-revision-text-box-text3">
            <span>Send Revision Request</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RequestRevisionTextBox
