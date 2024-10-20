import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dashboard-freelancer.css'

const DashboardFreelancer = (props) => {
  return (
    <div className="dashboard-freelancer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="dashboard-freelancer-dashboard-freelancer">
        <span className="dashboard-freelancer-text10">
          <span className="dashboard-freelancer-text11">Welcome Back,</span>
          <span className="dashboard-freelancer-text12">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="dashboard-freelancer-text14">
            the-dote-sama.base.eth!
          </span>
        </span>
        <div className="dashboard-freelancer-frame49">
          <div className="dashboard-freelancer-group21">
            <span className="dashboard-freelancer-text15">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <img
            alt="Ellipse18561"
            src="/external/ellipse18561-mnky-200h.png"
            className="dashboard-freelancer-ellipse1"
          />
          <img
            alt="Ellipse148561"
            src="/external/ellipse148561-rhup-200h.png"
            className="dashboard-freelancer-ellipse14"
          />
        </div>
        <div className="dashboard-freelancer-frame57">
          <span className="dashboard-freelancer-text17">
            <span>Find Jobs</span>
          </span>
        </div>
        <div className="dashboard-freelancer-frame58">
          <span className="dashboard-freelancer-text19">
            <span>Update Profile</span>
          </span>
        </div>
        <div className="dashboard-freelancer-frame50">
          <span className="dashboard-freelancer-text21">
            <span>No active jobs</span>
          </span>
        </div>
        <div className="dashboard-freelancer-frame55">
          <span className="dashboard-freelancer-text23">
            <span>4.0/5.0</span>
          </span>
          <div className="dashboard-freelancer-rating">
            <img
              alt="Star128574"
              src="/external/star128574-ge84.svg"
              className="dashboard-freelancer-star12"
            />
            <img
              alt="Star138575"
              src="/external/star138575-x9d.svg"
              className="dashboard-freelancer-star13"
            />
            <img
              alt="Star148575"
              src="/external/star148575-9c8j.svg"
              className="dashboard-freelancer-star14"
            />
            <img
              alt="Star158575"
              src="/external/star158575-08rb.svg"
              className="dashboard-freelancer-star15"
            />
            <img
              alt="Star168575"
              src="/external/star168575-3vxs.svg"
              className="dashboard-freelancer-star16"
            />
          </div>
        </div>
        <div className="dashboard-freelancer-frame56">
          <span className="dashboard-freelancer-text25">
            <span>No new notifications</span>
          </span>
        </div>
        <span className="dashboard-freelancer-text27">
          <span>Notifications</span>
        </span>
        <div className="dashboard-freelancer-frame54">
          <span className="dashboard-freelancer-text29">
            <span>Total earnings</span>
          </span>
          <span className="dashboard-freelancer-text31">
            <span>Current earnings</span>
          </span>
          <span className="dashboard-freelancer-text33">
            <span>Upcoming Payments</span>
          </span>
          <span className="dashboard-freelancer-text35">
            <span>$0</span>
          </span>
          <span className="dashboard-freelancer-text37">
            <span>$10,000</span>
          </span>
          <span className="dashboard-freelancer-text39">
            <span>$10,000</span>
          </span>
          <span className="dashboard-freelancer-text41">
            <span>View Full Earnings</span>
          </span>
          <img
            alt="Line38563"
            src="/external/line38563-gfht.svg"
            className="dashboard-freelancer-line3"
          />
        </div>
        <span className="dashboard-freelancer-text43">
          <span>Active Jobs</span>
        </span>
        <span className="dashboard-freelancer-text45">
          <span>Average Rating</span>
        </span>
        <span className="dashboard-freelancer-text47">
          <span>Earnings Summary</span>
        </span>
        <div className="dashboard-freelancer-frame53">
          <Link
            to="/navafterloginscreen-freelancer"
            className="dashboard-freelancer-navlink1"
          >
            <img
              alt="menu8559"
              src="/external/menu8559-sjf.svg"
              className="dashboard-freelancer-menu"
            />
          </Link>
          <Link
            to="/profile-screen-freelancer"
            className="dashboard-freelancer-navlink2"
          >
            <div className="dashboard-freelancer-group22">
              <span className="dashboard-freelancer-text49">
                <span>the-dote-sama.base.eth</span>
              </span>
            </div>
          </Link>
          <div className="dashboard-freelancer-group7">
            <span className="dashboard-freelancer-text51">
              <span>wu</span>
            </span>
            <span className="dashboard-freelancer-text53">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardFreelancer
