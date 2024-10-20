import React from 'react'

import { Helmet } from 'react-helmet'

import './notification-screen-client.css'

const NotificationScreenClient = (props) => {
  return (
    <div className="notification-screen-client-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="notification-screen-client-notification-screen-client">
        <span className="notification-screen-client-text10">
          <span>Notifications</span>
        </span>
        <div className="notification-screen-client-frame50">
          <span className="notification-screen-client-text12">
            <span>No new notifications to show</span>
          </span>
        </div>
        <div className="notification-screen-client-frame591"></div>
        <div className="notification-screen-client-frame54">
          <span className="notification-screen-client-text14">
            <span>No new payments to show</span>
          </span>
        </div>
        <div className="notification-screen-client-frame60">
          <span className="notification-screen-client-text16">
            <span>No new messages</span>
          </span>
        </div>
        <div className="notification-screen-client-frame592"></div>
        <div className="notification-screen-client-frame61"></div>
        <span className="notification-screen-client-text18">
          <span>Job</span>
        </span>
        <span className="notification-screen-client-text20">
          <span>Payment</span>
        </span>
        <span className="notification-screen-client-text22">
          <span>Messages</span>
        </span>
        <div className="notification-screen-client-frame53">
          <img
            alt="menu1392"
            src="/external/menu1392-3hfg.svg"
            className="notification-screen-client-menu"
          />
          <div className="notification-screen-client-group2">
            <span className="notification-screen-client-text24">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <div className="notification-screen-client-group7">
            <span className="notification-screen-client-text26">
              <span>wu</span>
            </span>
            <span className="notification-screen-client-text28">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationScreenClient
