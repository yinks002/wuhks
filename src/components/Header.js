
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">wuhks</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><button className="launch-btn">Launch dApp</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
