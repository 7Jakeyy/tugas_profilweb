import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ setActiveTab }) => {
  return (
    <motion.div 
      key="contact"
      className="content-card"
      layoutId="morph-container"
      initial={{ opacity: 0, filter: 'blur(10px)', x: -30 }}
      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
      exit={{ opacity: 0, filter: 'blur(10px)', x: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2><span style={{fontSize:'1rem'}}>02 //</span> KONEKSI <span className="blinking-cursor"></span></h2>
      <div style={{width: '50px', height: '2px', background: 'currentColor', marginBottom: '20px'}}></div>
      <p style={{opacity: 0.7, fontSize: '13px', marginBottom: '20px', letterSpacing: '1px'}}>MENGAKSES JARINGAN KOMUNIKASI...</p>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
        <a href="https://instagram.com/dzakwanhibrizi" target="_blank" rel="noreferrer" className="sosmed-link">
          <span style={{color: 'inherit'}}>IG_</span> @dzakwanhibrizi
        </a>
        <a href="https://github.com/7Jakeyy" target="_blank" rel="noreferrer" className="sosmed-link">
          <span style={{color: 'inherit'}}>GH_</span> 7Jakeyy
        </a>
      </div>
      
      <br/>
      <button className="close-btn" onClick={() => setActiveTab('home')}>[ KEMBALI ]</button>
    </motion.div>
  );
};

export default Contact;