// LandingPage.js
import NavBar from '../components/NavBar'
import React from 'react';
import NFTCard from '../components/NFTCard';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-100 p-4">
      < HeroSection />
    </div>
  );
}

export default LandingPage;
