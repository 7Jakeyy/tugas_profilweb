import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Ini cara React memanggil CSS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bgMusic from './assets/lagu.mp3'; // Pastikan nama file lagunya benar

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [isLoading, setIsLoading] = useState(true);
  
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMusic = (e) => {
    e.stopPropagation(); 
    if (isPlayingRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        })
        .catch(err => console.log("Play error:", err));
    }
  };

  // Timer untuk Boot Screen (Loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Autoplay musik saat ada interaksi pertama
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlayingRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            isPlayingRef.current = true;
            window.removeEventListener('click', handleFirstInteraction);
          })
          .catch(err => console.log("Autoplay ditolak:", err));
      }
    };
    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, []);

  // Tampilan Loading
  if (isLoading) {
    return (
      <div className="boot-screen">
        <div className="terminal-loader">
          <p className="system-text">&gt; SYSTEM BOOT SEQUENCE INITIATED...</p>
          <p className="system-text delay-1">&gt; LOADING ASSETS: <span style={{color: '#E67E22'}}>OK</span></p>
          <p className="system-text delay-2">&gt; DECRYPTING PROFILE DATA: <span style={{color: '#E67E22'}}>OK</span></p>
          <p className="system-text delay-3">&gt; ACCESS GRANTED.</p>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Web Utama
  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="grid-bg"></div>
      
      <button 
        onClick={toggleMusic} 
        style={{
          position: 'fixed', bottom: '30px', right: '30px', zIndex: 99,
          background: 'rgba(211, 84, 0, 0.2)', backdropFilter: 'blur(10px)',
          border: '1px solid #D35400', color: isDarkMode ? '#E67E22' : '#D35400',
          borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontSize: '20px', transition: 'all 0.3s ease'
        }}
        className="music-btn"
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>

      <audio ref={audioRef} loop src={bgMusic} />

      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        setActiveTab={setActiveTab} 
      />
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;