import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ backgroundImage, logoImage, animationDuration = 6 }) => {
  const logoRef = useRef(null);
  const homeRef = useRef(null);

  useGSAP(() => {
    // GSAP animation to fade in the logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: animationDuration, ease: 'power2.out' }
    );
  }, [logoRef]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <img ref={homeRef} src={backgroundImage} alt="background" className="absolute inset-0 h-full w-full object-cover" />

      <div className="flex justify-center items-center h-full">
        <img
          ref={logoRef}
          src={logoImage}
          alt="logo"
          className="opacity-0"
        />
      </div>
    </div>
  );
};

export default Hero;
