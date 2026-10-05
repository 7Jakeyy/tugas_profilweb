import React from 'react';
import { motion } from 'framer-motion';

const About = ({ setActiveTab }) => {
  return (
    <motion.div 
      key="about"
      className="content-card"
      layoutId="morph-container"
      initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2><span style={{fontSize:'1rem'}}>01 </span> IDENTITAS & PENDIDIKAN <span className="blinking-cursor"></span></h2>
      <div style={{width: '50px', height: '2px', background: 'currentColor', marginBottom: '20px'}}></div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '50vh', overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* Identitas */}
        <div>
           <p style={{fontSize: '14px', opacity: 0.8, letterSpacing: '0.5px', marginBottom: '15px'}}>
              <strong>MUHAMMAD DZAKWAN HIBRIZI</strong> 
              <br/><br/>
              Lahir di bumi pertiwi ini khususnya di Kota Kembang pada hari Rabu, 21 September 2006. Berbekal rasa penasaran dan ingin tahu mengenai banyak hal juga karena kesempatan hidup di dunia yang hanya satu kali ini, saya ingin menjalani kehidupan yang sangat memberikan pelajaran, pegalaman, dan pengetahuan. Pendidikan, Agama, Olahraga, teknologi, dan
              berbagai hal lainnya saya jalani dengan sekuat yang saya bisa.
            </p>
        </div>

        <h3 style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', color: '#D35400', marginTop: '10px'}}>RIWAYAT PENDIDIKAN</h3>

        {/* Item: SD */}
        <div>
          <a 
            href="https://www.instagram.com/sdit_fitrah_insani" target="_blank" rel="noreferrer"
            style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
            className="school-link"
          >
            <span style={{color: '#D35400'}}>🔗</span> SDIT FITRAH INSANI
          </a>
          <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Sekolah Dasar (SD)</p>
        </div>

        {/* Item: MTs */}
        <div>
          <a 
            href="https://www.instagram.com/pesantrenpersis50lembang" target="_blank" rel="noreferrer"
            style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
            className="school-link"
          >
            <span style={{color: '#D35400'}}>🔗</span> MTs PERSIS 50 LEMBANG
          </a>
          <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Madrasah Tsanawiyah (MTs)</p>
        </div>

        {/* Item: SMA */}
        <div>
          <a 
            href="https://www.instagram.com/smaplusmuallimin50lembang" target="_blank" rel="noreferrer"
            style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
            className="school-link"
          >
            <span style={{color: '#D35400'}}>🔗</span> SMA PLUS MU'ALLIMIN PERSIS 50 LEMBANG
          </a>
          <p style={{fontSize: '13px', opacity: 0.6, marginTop: '4px'}}>Sekolah Menengah Atas (SMA)</p>
        </div>

        {/* Item: Kuliah */}
        <div>
          <a 
            href="https://www.instagram.com/upiofficial" target="_blank" rel="noreferrer"
            style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', letterSpacing: '1px', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}
            className="school-link"
          >
            <span style={{color: '#D35400'}}>🔗</span> UNIVERSITAS PENDIDIKAN INDONESIA (UPI)
          </a>
          <p style={{marginTop: '8px', fontSize: '14px', opacity: 0.7, letterSpacing: '0.5px'}}>
            Perguruan Tinggi Negeri
          </p>
        </div>
      </div>

      <button className="close-btn" style={{marginTop: '30px'}} onClick={() => setActiveTab('home')}>[ KEMBALI ]</button>
    </motion.div>
  );
};

export default About;