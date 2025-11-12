// src/components/LoadingScreen.jsx - VERSI BARU: BOUNCING AND FLOATING

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoaded }) => {
  const logoRef = useRef(null);
  const loadingScreenRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!logoRef.current || !loadingScreenRef.current) {
      return;
    }
    
    // Timeline utama
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 1. Logo muncul dengan efek Bouncing
    tl.fromTo(logoRef.current, 
      { scale: 0.1, opacity: 0, y: -50 }, // Mulai dari kecil, transparan, dan di atas
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "bounce.out" } // Memantul ke posisi tengah
    );
    
    // 2. Logo Melayang (Floating)
    // Animasi melayang ke atas/bawah yang berulang tak terbatas,
    // Kita jalankan terpisah dan kita kill sebelum fade out.
    const floatTween = gsap.to(logoRef.current, {
        y: 15, // Gerak naik/turun 15px
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true, // Kembali ke posisi awal
        repeat: -1, // Ulangi terus menerus
        paused: true // Mulai dalam keadaan PAUSED
    });

    // Panggil floatTween untuk dimainkan setelah Bouncing selesai
    tl.call(() => floatTween.play());

    // 3. Jeda Floating (Melayang selama 2 detik)
    tl.to({}, { duration: 2 }); // Tween kosong untuk jeda waktu floating
    
    // 4. Kill Floating
    tl.call(() => {
        floatTween.kill(); // Menghentikan animasi melayang yang berulang
    });
    
    // 5. Logo Fade Out
    tl.to(logoRef.current, {
        opacity: 0, 
        duration: 0.7,
        ease: "power2.in",
        y: -30 // Tambahkan sedikit gerakan ke atas saat menghilang
    });
    
    // 6. Kontainer Loading Screen Fade Out
    tl.to(loadingScreenRef.current, { 
        opacity: 0, 
        duration: 0.8,
        onComplete: () => {
            // Callback ke App.jsx dijalankan di sini
            loadingScreenRef.current.style.display = 'none';
            setShowContent(true); 
            if (onLoaded) {
                onLoaded(); 
            }
        }
    }, ">-0.4"); // Mulai fade out kontainer 0.4 detik sebelum logo selesai

  }, [onLoaded]); 

  return (
    <div ref={loadingScreenRef} className={`loading-screen ${showContent ? 'hidden' : ''}`}>
      <img 
        ref={logoRef} 
        src="/src/assets/Untitled-2.png" 
        alt="Atthilah Farm Logo" 
        className="loading-logo" 
      />
    </div>
  );
};

export default LoadingScreen;