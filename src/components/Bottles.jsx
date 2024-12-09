import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bottleImages = [
  '/images/bourbonNoBg.png',
  '/images/caskNoBg.png',
  '/images/appleNoBg.png',
  '/images/coffeeNoBg.png',
  '/images/maidNoBg.png',
  '/images/bourbonNoBg.png',
  '/images/vodkaNoBg.png',
  '/images/ginNoBg.png',
  '/images/earlGreyNoBg.png',
]

const Bottles = () => {
  const bottlesRef = useRef([]);
  const contentRef = useRef(null)

  useGSAP(() => {
    
    gsap.fromTo(
      bottlesRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 60%', // Adjust this value to trigger earlier
          markers: true, // Add markers to see where the trigger points are
        }
      }
    );
  }, [ bottlesRef]);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-4 space-y-4"> 
        {bottleImages.map((src, index) => 
        ( <img key={index} ref={(el) => (bottlesRef.current[index] = el)} src={src} alt={`bottle-${index}`} className="w-32 h-auto m-2 opacity-0" /> ))} 
      </div>
       <div ref={contentRef} className="flex flex-col items-center justify-center bg-slate bg-opacity-90 p-6 md:p-12 rounded-lg shadow-lg shadow-black max-w-4xl mx-auto"> 
          <h1 className="font-josefin text-3xl md:text-4xl font-bold text-white text-center mb-4"> 
            A MODERN INTERPRETATION OF CLASSIC SPIRITS 
          </h1> 
          <h2 className="font-josefin italic text-lg md:text-2xl text-amber text-center mb-6">
            Best Hudson Valley Distillery - Three Years In a Row 
          </h2> 
          <p className="font-josefin text-base md:text-lg text-white text-center leading-relaxed">
            We craft the finest, artisanal spirits available in one of Beacon, New York's downtown 19th century buildings. We choose only the highest quality grains from local farms and strive to create classic spirits of unique character and depth. Visit our tasting room and urban production space at <br/>10 N. Chestnut Street in Beacon, NY. </p>
      </div>
    </div>
  );
};

export default Bottles;

