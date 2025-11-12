// src/App.jsx

import React, { useState } from 'react'; // PENTING: Import useState
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import LoadingScreen from './components/LoadingScreen'; // 1. Import komponen LoadingScreen

const App = () => {
  // 2. State untuk mengontrol tampilan loading screen
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fungsi yang dipanggil oleh LoadingScreen setelah animasinya selesai
  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="font-sans scroll-smooth">
      
      {/* 4. Kondisi: Tampilkan LoadingScreen jika isLoading true */}
      {isLoading && <LoadingScreen onLoaded={handleLoaded} />}

      {/* 5. Kondisi: Tampilkan Konten Utama jika isLoading false */}
      {!isLoading && (
        <>
          <Header />
          
          <main>
            {/* Menggunakan elemen <main> untuk meningkatkan aksesibilitas */}
            <HomeSection />
            <AboutSection />
            <ContactSection />
          </main>
        </>
      )}

    </div>
  );
};

export default App;