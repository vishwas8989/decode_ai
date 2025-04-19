import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import EventsSection from './components/EventsSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <EventsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;