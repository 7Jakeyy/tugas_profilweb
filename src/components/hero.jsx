import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// INI WAJIB ADA: Manggil file Home, About, dan Contact yang udah lu buat
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Hero = ({ activeTab, setActiveTab }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 40;
    const moveY = (clientY - window.innerHeight / 2) / 40;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <div className="hero-section" onMouseMove={handleMouseMove}>
      
      {/* Teks Belakang */}
      <motion.h1 
        className="bg-text"
        animate={{
          x: `calc(-50% - ${mousePosition.x}px)`,
          y: `calc(-50% - ${mousePosition.y}px)`
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 25 }}
      >
        DZAKWAN
      </motion.h1>

      <div className="glow-orb"></div>

      {/* Area Transisi antar Komponen */}
      <AnimatePresence mode="wait">
        
        {/* LOGIKA PEMANGGILAN KOMPONEN: Cocokin sama activeTab */}
        {activeTab === 'home' && <Home key="home" mousePosition={mousePosition} />}
        {activeTab === 'about' && <About key="about" setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <Contact key="contact" setActiveTab={setActiveTab} />}
        
      </AnimatePresence>
    </div>
  );
};

export default Hero;