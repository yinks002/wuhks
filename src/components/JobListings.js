import React from 'react';
import './JobListings.css';

const JobListings = () => {
  return (
    <section className="job-listings">
      <h2>Trending Jobs</h2>
      <div className="jobs">
        <div className="job-card">
          <h3>UI/UX Designer for Mobile App Redesign</h3>
          <p>Budget: $2000 - $3000 (Fixed Price) | Location: Remote | Deadline: 2 Months</p>
          <button className="view-details-btn">View Details</button>
        </div>
        {/* Add more job cards here */}
      </div>
    </section>
  );
};

export default JobListings;
