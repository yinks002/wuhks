import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Create Your Profile</h3>
          <p>Connect Your Crypto Wallet and complete your profile to get started.</p>
        </div>
        <div className="step">
          <h3>Step 2: Find a Job</h3>
          <p>Browse the job marketplace for projects that match your skills.</p>
        </div>
        <div className="step">
          <h3>Step 3: Get Hired</h3>
          <p>Get hired upon review and acceptance of your proposal by the client.</p>
        </div>
        <div className="step">
          <h3>Step 4: Get Paid</h3>
          <p>Get paid upon job completion and approval by the client.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
