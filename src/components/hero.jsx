import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../assets/fotobahangw.png';

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

      <AnimatePresence mode="wait">
        
        {/* FOTO PROFIL */}
        {activeTab === 'home' && (
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
        )}

        {/* RIWAYAT PENDIDIKAN */}
        {activeTab === 'pendidikan' && (
          <motion.div 
            key="pendidikan"
            className="content-card"
            layoutId="morph-container"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2><span style={{fontSize:'1rem'}}>01</span> RIWAYAT PENDIDIKAN</h2>
            <div style={{width: '50px', height: '2px', background: 'currentColor', marginBottom: '25px'}}></div>
            
            {/* List Pendidikan - Scrollable jika layarnya kecil */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '50vh', overflowY: 'auto', paddingRight: '10px' }}>
              
              {/* Item: SD */}
              <div>
                <a 
                  href="https://www.instagram.com/official.sdit.istiqomah/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                  className="school-link"
                >
                  <span style={{color: '#D35400'}}>🔗</span> SDIT Istiqomah Lembang
                </a>
                <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Sekolah Dasar (SD)</p>
              </div>

              {/* Item: MTs */}
              <div>
                <a 
                  href="https://www.instagram.com/mtspersislembang/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                  className="school-link"
                >
                  <span style={{color: '#D35400'}}>🔗</span> MTs Persis 50 Lembang
                </a>
                <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Madrasah Tsanawiyah (MTs)</p>
              </div>

              {/* Item: SMA */}
              <div>
                <a 
                  href="https://www.instagram.com/smaplusmualiminlembang/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                  className="school-link"
                >
                  <span style={{color: '#D35400'}}>🔗</span> SMA Plus Muallimin 50 Lembang
                </a>
                <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Sekolah Menengah Atas (SMA)</p>
              </div>

              {/* Item: Kuliah */}
              <div>
                <a 
                  href="https://www.instagram.com/upiofficial" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
                  className="school-link"
                >
                  <span style={{color: '#D35400'}}>🔗</span> Universitas Pendidikan Indonesia (UPI)
                </a>
                <p style={{marginTop: '8px', fontSize: '14px', opacity: 0.7, letterSpacing: '0.5px'}}>
                  Perguruan Tinggi Negeri
                </p>
              </div>

            </div>

            <button className="close-btn" style={{marginTop: '30px'}} onClick={() => setActiveTab('home')}>[ KEMBALI ]</button>
          </motion.div>
        )}

        {/* ABOUT ME */}
        {activeTab === 'about' && (
          <motion.div 
            key="about"
            className="content-card"
            layoutId="morph-container"
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2><span style={{fontSize:'1rem'}}>02</span> IDENTITAS <span className="blinking-cursor"></span></h2>
            <div style={{width: '50px', height: '2px', background: 'currentColor', marginBottom: '20px'}}></div>
            <p style={{fontSize: '14px', opacity: 0.8, letterSpacing: '0.5px'}}>
              <strong>MUHAMMAD DZAKWAN HIBRIZI</strong> 
              <br/><br/>Dilahirkan di Kota Kembang pada hari Rabu 21 September 2006 pukul 3 dini hari. Berbekal rasa penasaran yang cukup tinggi, dunia menuntun saya menjelajahi banyak hal. Agama, teknologi, Olahraga, dan bab kehidupan lainnya baru saya selami kedalamannya. 
            </p>
            <button className="close-btn" onClick={() => setActiveTab('home')}>[ KEMBALI ]</button>
          </motion.div>
        )}

        {/* SOSIAL MEDIA */}
        {activeTab === 'sosmed' && (
          <motion.div 
            key="sosmed"
            className="content-card"
            layoutId="morph-container"
            initial={{ opacity: 0, filter: 'blur(10px)', x: -30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2><span style={{fontSize:'1rem'}}>03</span> Kenali Saya di Medsos <span className="blinking-cursor"></span></h2>
            <div style={{width: '50px', height: '2px', background: 'currentColor', marginBottom: '20px'}}></div>
            <p style={{opacity: 0.7, fontSize: '13px', marginBottom: '20px', letterSpacing: '1px'}}>MENGAKSES JARINGAN KOMUNIKASI...</p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <a href="https://instagram.com/dzakwanhibrizi" target="_blank" rel="noreferrer" className="sosmed-link">
                <span style={{color: 'inherit'}}>Instagram</span> @dzakwanhibrizi
              </a>
              <a href="https://github.com/7Jakeyy" target="_blank" rel="noreferrer" className="sosmed-link">
                <span style={{color: 'inherit'}}>Github</span> 7Jakeyy
              </a>
            </div>
            
            <br/>
            <button className="close-btn" onClick={() => setActiveTab('home')}>[ KEMBALI ]</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;