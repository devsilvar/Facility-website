import React from 'react';
import HeroSection from '../components/Hero';
import AboutUsSection from '../components/About';
import VideoFeatureSection from '../components/VideoSection';
import OurWorks from '../components/Works';
import TeamMembers from '../components/CompanyProfile';
import { CTA } from '../components/CTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <VideoFeatureSection />
      <TeamMembers />
      <OurWorks />
      <CTA />
    </>
  );
};

export default Home;
