import React from 'react'

import { Helmet } from 'react-helmet'

import './transaction-successful.css'

const TransactionSuccessful = (props) => {
  return (
    <div className="transaction-successful-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="transaction-successful-transaction-successful">
        <div className="transaction-successful-frame25">
          <div className="transaction-successful-frame1171275915">
            <span className="transaction-successful-text10">
              <span>Done</span>
            </span>
          </div>
        </div>
        <span className="transaction-successful-text12">
          <span className="transaction-successful-text13">Recipient</span>
          <br></br>
          <span className="transaction-successful-text15"></span>
          <span>the-dote-sama.base.eth</span>
        </span>
        <span className="transaction-successful-text17">
          <span>Payment Released Successfully</span>
        </span>
        <span className="transaction-successful-text19">
          <span className="transaction-successful-text20">Transaction ID</span>
          <br></br>
          <span className="transaction-successful-text22"></span>
          <span>0x123abc...Xyz789</span>
        </span>
        <img
          alt="Rectangle51706"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="transaction-successful-rectangle5"
        />
        <div className="transaction-successful-frame53">
          <img
            alt="menu1706"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="transaction-successful-menu"
          />
          <div className="transaction-successful-group2">
            <span className="transaction-successful-text24">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <div className="transaction-successful-group7">
            <span className="transaction-successful-text26">
              <span>wu</span>
            </span>
            <span className="transaction-successful-text28">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSuccessful
