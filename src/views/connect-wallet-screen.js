import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './connect-wallet-screen.css'

const ConnectWalletScreen = (props) => {
  return (
    <div className="connect-wallet-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="connect-wallet-screen-connect-wallet-screen">
        <Link
          to="/wallet-connected1"
          className="connect-wallet-screen-navlink1"
        >
          <div className="connect-wallet-screen-frame2">
            <div className="connect-wallet-screen-frame6"></div>
            <span className="connect-wallet-screen-text10">
              <span>MetaMask</span>
            </span>
          </div>
        </Link>
        <Link
          to="/wallet-connected1"
          className="connect-wallet-screen-navlink2"
        >
          <div className="connect-wallet-screen-frame3">
            <div className="connect-wallet-screen-frame7"></div>
            <span className="connect-wallet-screen-text12">
              <span>Coinbase Wallet</span>
            </span>
          </div>
        </Link>
        <Link
          to="/wallet-connected1"
          className="connect-wallet-screen-navlink3"
        >
          <div className="connect-wallet-screen-frame4">
            <div className="connect-wallet-screen-frame8"></div>
            <span className="connect-wallet-screen-text14">
              <span>Rainbow</span>
            </span>
          </div>
        </Link>
        <Link to="/wallet-connected" className="connect-wallet-screen-navlink4">
          <div className="connect-wallet-screen-frame5">
            <div className="connect-wallet-screen-frame9"></div>
            <span className="connect-wallet-screen-text16">
              <span>Wallet Connect</span>
            </span>
          </div>
        </Link>
        <span className="connect-wallet-screen-text18">
          <span>
            Don&apos;t have a crypto wallet yet?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="connect-wallet-screen-text20">
          <span className="connect-wallet-screen-text21">
            Learn how to set up one
          </span>
          <span> here.</span>
        </span>
        <div className="connect-wallet-screen-group7">
          <span className="connect-wallet-screen-text23">
            <span>wu</span>
          </span>
          <span className="connect-wallet-screen-text25">
            <span>hks</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletScreen
