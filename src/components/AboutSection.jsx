// src/components/AboutSection.jsx - VERSI CSS BIASA

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Us</h2>
      <div className="about-grid">
        {/* Kartu Jasa */}
        <div className="about-card">
          <h3 className="card-title">Jasa</h3>
          <img src="/src/assets/jasa.jpg" alt="Jasa Fattening" className="card-image" />
          <p className="card-text">Diperternakan ini, kami juga menyediakan jasa fattening atau penggemukan hewan ternak.</p>
        </div>
        {/* Kartu Produk */}
        <div className="about-card">
          <h3 className="card-title">Produk</h3>
          <img src="/src/assets/produk.jpg" alt="Produk Pupuk" className="card-image" />
          <p className="card-text">Kami juga memproduksi pupuk organik yang terbuat dari Urine dan Kotoran kambing.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;