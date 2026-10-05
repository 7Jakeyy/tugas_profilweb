import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/fotobahangw.png'; 

const Home = ({ mousePosition }) => {
  return (
    <motion.img 
      key="profile"
      src={profilePic} 
      alt="Profile" 
      className="profile-img"
      layoutId="morph-container" 
      animate={{ 
        opacity: 1, 
        filter: 'blur(0px)',
        y: 0 + (mousePosition.y * 1.2),
        x: 0 + (mousePosition.x * 1.2)
      }}
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }} 
      transition={{ duration: 0.5, ease: "circOut" }}
    />
  );
};

export default Home;