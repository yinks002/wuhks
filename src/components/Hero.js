import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Your Freelance Platform, Powered by Smart Contracts</h1>
      <p>Experience a secure freelancing ecosystem for both clients and freelancers, where collaboration is protected through smart contracts.</p>
      <div className="cta-buttons">
        <button className="launch-btn">Launch dApp</button>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default Hero;
