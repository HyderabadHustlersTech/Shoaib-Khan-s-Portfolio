import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import JourneySection from '../components/JourneySection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: 'hidden' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default Home