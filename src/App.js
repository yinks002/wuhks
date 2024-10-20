import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobListings from './components/JobListings';
import HowItWorks from './components/HowItWorks';
import ProfileSetup from './components/ProfileSetup';
import JobPost from './components/JobPost';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><JobListings /></>} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="/jobs" element={<JobPost />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
