// src/App.jsx

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      {/* Semua konten Anda dari tag <body> */}
      
      <Header />
      
      <main>
        {/* Menggunakan elemen <main> untuk meningkatkan aksesibilitas */}
        <HomeSection />
        <AboutSection />
        <ContactSection />
      </main>

    </div>
  );
};

export default App;