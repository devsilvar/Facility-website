import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeroSection from './components/Hero';
import AboutUsSection from './components/About';
import VideoFeatureSection from './components/VideoSection';
import CompanyOwners from './components/CompanyProfile';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurWorks from './components/Works';
import TeamMembers from './components/CompanyProfile';
import { CTA } from './components/CTA';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <VideoFeatureSection />
      <TeamMembers />
      <OurWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
