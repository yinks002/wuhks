import React from 'react'

import { Helmet } from 'react-helmet'

import './approval-confirmation-screen.css'

const ApprovalConfirmationScreen = (props) => {
  return (
    <div className="approval-confirmation-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="approval-confirmation-screen-approval-confirmation-screen">
        <div className="approval-confirmation-screen-frame25">
          <div className="approval-confirmation-screen-frame1171275915">
            <span className="approval-confirmation-screen-text1">
              <span>Approve</span>
            </span>
          </div>
        </div>
        <div className="approval-confirmation-screen-frame26">
          <span className="approval-confirmation-screen-text3">
            <span>Cancel</span>
          </span>
        </div>
        <span className="approval-confirmation-screen-text5">
          <span>
            Upon approval, the payment of $500 will
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>be released to the freelancer’s wallet.</span>
        </span>
        <img
          alt="Rectangle51706"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="approval-confirmation-screen-rectangle5"
        />
      </div>
    </div>
  )
}

export default ApprovalConfirmationScreen
