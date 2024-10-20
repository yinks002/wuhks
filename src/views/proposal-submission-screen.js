import React from 'react'

import { Helmet } from 'react-helmet'

import './proposal-submission-screen.css'

const ProposalSubmissionScreen = (props) => {
  return (
    <div className="proposal-submission-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="proposal-submission-screen-proposal-submission-screen">
        <span className="proposal-submission-screen-text10">
          <span>Submit Your Proposal</span>
        </span>
        <span className="proposal-submission-screen-text12">
          <span>Cover Letter</span>
        </span>
        <span className="proposal-submission-screen-text14">
          <span>Cover Letter</span>
        </span>
        <span className="proposal-submission-screen-text16">
          <span>Proposed Budget</span>
        </span>
        <span className="proposal-submission-screen-text18">
          <span>Timeline</span>
        </span>
        <span className="proposal-submission-screen-text20">
          <span>Portfolio</span>
        </span>
        <div className="proposal-submission-screen-frame63">
          <span className="proposal-submission-screen-text22">
            <span>
              Write a brief cover letter explaining why
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>you are a good fit for the job</span>
          </span>
        </div>
        <div className="proposal-submission-screen-frame64">
          <span className="proposal-submission-screen-text26">
            <span>Enter your desired payment</span>
          </span>
        </div>
        <div className="proposal-submission-screen-frame66">
          <span className="proposal-submission-screen-text28">
            <span>Enter link to your portfolio</span>
          </span>
        </div>
        <div className="proposal-submission-screen-frame67">
          <span className="proposal-submission-screen-text30">
            <span>Attach Files</span>
          </span>
          <div className="proposal-submission-screen-frame621"></div>
        </div>
        <div className="proposal-submission-screen-frame65">
          <div className="proposal-submission-screen-frame622"></div>
        </div>
        <div className="proposal-submission-screen-frame57">
          <span className="proposal-submission-screen-text32">
            <span>Submit Proposal</span>
          </span>
        </div>
        <div className="proposal-submission-screen-frame53">
          <img
            alt="menu1394"
            src="/external/menu1394-2kcs.svg"
            className="proposal-submission-screen-menu"
          />
          <div className="proposal-submission-screen-group2">
            <span className="proposal-submission-screen-text34">
              <span>the-dote-sama.base.eth</span>
            </span>
          </div>
          <div className="proposal-submission-screen-group7">
            <span className="proposal-submission-screen-text36">
              <span>wu</span>
            </span>
            <span className="proposal-submission-screen-text38">
              <span>hks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProposalSubmissionScreen
