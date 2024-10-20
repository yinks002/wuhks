import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './wallet-connected.css'

const WalletConnected = (props) => {
  return (
    <div className="wallet-connected-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="wallet-connected-wallet-connected">
        <span className="wallet-connected-text10">
          <span>Wallet Connected!</span>
        </span>
        <span className="wallet-connected-text12">
          <span>
            It looks like you don&apos;t have
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>a basename yet.</span>
        </span>
        <img
          alt="Rectangle54915"
          src="/external/rectangle54915-6af-200h.png"
          className="wallet-connected-rectangle5"
        />
        <div className="wallet-connected-frame25">
          <span className="wallet-connected-text16">
            <span>Get a Basename</span>
          </span>
        </div>
        <Link
          to="/profile-creation-screen"
          className="wallet-connected-navlink"
        >
          <div className="wallet-connected-frame26">
            <span className="wallet-connected-text18">
              <span>Skip for Now</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WalletConnected
