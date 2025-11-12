// src/components/ContactSection.jsx - VERSI CSS BIASA

import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      
      <video autoPlay loop muted playsInline className="contact-bg-video">
        <source src="/src/assets/background-video1.mp4" type="video/mp4" />
      </video>

      <div className="contact-form-container">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form">
          
          <input type="text" placeholder="Nama" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <textarea rows="4" placeholder="Pesan" className="form-input form-textarea"></textarea>
          
          <button type="submit" className="form-button">Kirim</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;