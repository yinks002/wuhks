import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './wallet-connected1.css'

const WalletConnected1 = (props) => {
  return (
    <div className="wallet-connected1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="wallet-connected1-wallet-connected">
        <span className="wallet-connected1-text10">
          <span>Wallet Connected!</span>
        </span>
        <span className="wallet-connected1-text12">
          <span className="wallet-connected1-text13">
            Your Basename
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="wallet-connected1-text15"></span>
          <span className="wallet-connected1-text16">
            the-dote-sama.base.eth
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>has been recognized</span>
        </span>
        <img
          alt="Rectangle54912"
          src="/external/rectangle54912-kz8l-200h.png"
          className="wallet-connected1-rectangle5"
        />
        <Link
          to="/profile-creation-screen"
          className="wallet-connected1-navlink"
        >
          <div className="wallet-connected1-frame25">
            <span className="wallet-connected1-text20">
              <span>Continue</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WalletConnected1
