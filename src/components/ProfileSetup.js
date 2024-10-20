import React from 'react';
import './ProfileSetup.css';

const ProfileSetup = () => {
  return (
    <section className="profile-setup">
      <h2>Set Up Your Profile</h2>
      <form>
        <input type="text" placeholder="Enter your full name" />
        <input type="text" placeholder="Professional Title" />
        <textarea placeholder="Tell us about yourself and highlight your skills and experience"></textarea>
        <button type="submit">Save and Continue</button>
      </form>
    </section>
  );
};

export default ProfileSetup;
