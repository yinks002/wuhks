import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './welcome-screen.css'

const WelcomeScreen = (props) => {
  return (
    <div className="welcome-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="welcome-screen-welcome-screen">
        <div className="welcome-screen-group1">
          <img
            alt="menu121"
            src="/external/menu121-ttl.svg"
            className="welcome-screen-menu1"
          />
        </div>
        <span className="welcome-screen-text10">
          <span>Your Freelance Platform,</span>
          <br></br>
          <span>Powered by Smart Contracts</span>
        </span>
        <span className="welcome-screen-text14">
          <span>
            Experience a secure freelancing ecosystem
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            for both clients and freelancers,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            where collaboration is
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>protected through smart contracts.</span>
        </span>
        <Link to="/freelancerd-app-screen" className="welcome-screen-navlink1">
          <div className="welcome-screen-frame2">
            <span className="welcome-screen-text22">
              <span>Launch dApp</span>
            </span>
          </div>
        </Link>
        <span className="welcome-screen-text24">
          <span>Why Choose Us?</span>
        </span>
        <div className="welcome-screen-frame3"></div>
        <div className="welcome-screen-frame4"></div>
        <div className="welcome-screen-frame5"></div>
        <div className="welcome-screen-frame6"></div>
        <div className="welcome-screen-frame7"></div>
        <div className="welcome-screen-frame8"></div>
        <div className="welcome-screen-frame9"></div>
        <div className="welcome-screen-frame10"></div>
        <div className="welcome-screen-frame11"></div>
        <span className="welcome-screen-text26">
          <span>How It Works</span>
        </span>
        <Link to="/freelancerd-app-screen" className="welcome-screen-navlink2">
          <div className="welcome-screen-frame12">
            <span className="welcome-screen-text28">
              <span>Launch dApp</span>
            </span>
          </div>
        </Link>
        <div className="welcome-screen-frame14">
          <span className="welcome-screen-text30">
            <span>Subscribe</span>
          </span>
        </div>
        <div className="welcome-screen-frame15"></div>
        <span className="welcome-screen-text32">
          <span>Get Started</span>
        </span>
        <div className="welcome-screen-frame13"></div>
        <img
          alt="Line1520"
          src="/external/line1520-la2x.svg"
          className="welcome-screen-line1"
        />
        <span className="welcome-screen-text34">
          <span>Subscribe to our newsletter</span>
        </span>
        <span className="welcome-screen-text36">
          <span>Get updated on latest news and updates</span>
        </span>
        <span className="welcome-screen-text38">
          <span>Enter Email Address</span>
        </span>
        <div className="welcome-screen-group71">
          <span className="welcome-screen-text40">
            <span>wu</span>
          </span>
          <span className="welcome-screen-text42">
            <span>hks</span>
          </span>
        </div>
        <div className="welcome-screen-frame50">
          <Link to="/nav" className="welcome-screen-navlink3">
            <img
              alt="menu8534"
              src="/external/menu8534-ac7c.svg"
              className="welcome-screen-menu2"
            />
          </Link>
          <div className="welcome-screen-group72">
            <span className="welcome-screen-text44">
              <span>wu</span>
            </span>
            <span className="welcome-screen-text46">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
