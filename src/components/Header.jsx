// src/components/Header.jsx - VERSI CSS BIASA

import React from 'react';

const Header = () => {
  return (
    // Mengganti semua Tailwind class dengan satu class: main-header
    <header className="main-header">
      <div className="header-content">
        <a href="#home" className="header-logo">
          Syafaa's <br className="hidden-sm" /> Assigment
        </a>
        <nav>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;