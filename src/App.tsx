import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Podcasts from './components/Podcasts';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Navigation />
      <Hero />
      <About />
      <Podcasts />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;