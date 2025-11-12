// src/components/HomeSection.jsx - VERSI CSS BIASA

import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
      
      <video autoPlay loop muted playsInline className="home-bg-video">
        <source src="/src/assets/background-video.mp4" type="video/mp4" />
      </video>

      {/* kiri */}
      <div className="home-left">
        <h1 className="home-title">Welcome to Atthilah Farm</h1>
        <p className="home-description">
          Atthilah Farm is your trusted partner in integrated goat farming. We specialize in efficient and high-quality goat fattening services, ensuring livestock reach optimal weight. Furthermore, we are committed to sustainability by processing goat manure and urine waste into premium organic fertilizer, providing the best nutrition for your soil's fertility.
        </p>
        <a href="#about" className="home-button">Get Started</a>
      </div>
      
      {/* kanan - Tag <img> dengan penutup self-closing tag */}
      <div className="home-right">
        <img src="/src/assets/Untitled-2.png" alt="Hero Image" className="home-image" />
      </div>

    </section>
  );
};

export default HomeSection;