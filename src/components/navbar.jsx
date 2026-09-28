import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleTheme, setActiveTab }) => {
  
  // Varian animasi untuk menu
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: 'spring' }
    }),
  };

  return (
    <nav className="navbar">
      <motion.div 
        className="logo glitch-logo"
        onClick={() => setActiveTab('home')} 
        style={{cursor: 'pointer'}}
        initial="hidden" animate="visible" custom={0} variants={itemVariants}
      >
        <h2>DZAKWAN</h2>
      </motion.div>
      
      <div className="nav-links">
        <motion.span custom={1} initial="hidden" animate="visible" variants={itemVariants} onClick={() => setActiveTab('pendidikan')}>
          Riwayat Pendidikan 🎓
        </motion.span>
        <motion.span custom={2} initial="hidden" animate="visible" variants={itemVariants} onClick={() => setActiveTab('about')}>
          A Little Bit 🤩
        </motion.span>
        <motion.span custom={3} initial="hidden" animate="visible" variants={itemVariants} onClick={() => setActiveTab('sosmed')}>
          Sosial Media ⚙️
        </motion.span>
      </div>

      <div className="nav-actions">
        <motion.button custom={4} initial="hidden" animate="visible" variants={itemVariants} className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>
        <motion.button custom={5} initial="hidden" animate="visible" variants={itemVariants} className="hire-btn">
          🤩
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;