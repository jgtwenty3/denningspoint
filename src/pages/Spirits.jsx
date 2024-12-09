import React, { useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import { spirits } from '../lib/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Spirits = () => {
  const spiritsRef = useRef([]);
  spiritsRef.current = [];

  const addToRefs = (el) => {
    if (el && !spiritsRef.current.includes(el)) {
      spiritsRef.current.push(el);
    }
  };

  useEffect(() => {
    spiritsRef.current.forEach((spirit, index) => {
      const cardContent = spirit.querySelectorAll('.card-content > *');
      gsap.fromTo(spirit,
        { opacity: 0, scale: 0.5, rotation: 45 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: spirit,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo(cardContent,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.3 + 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: spirit,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="font-josefin">
      <Hero backgroundImage="/images/Barrels.jpg" logoImage="/images/logo.png" animationDuration={6} />
      <div className="mt-10 mx-auto max-w-7xl p-5">
        <div>
          {spirits.map((spirit, index) => (
            <div 
              key={index} 
              ref={addToRefs} 
              className={`my-10 p-5 rounded-lg shadow-lg flex flex-col md:flex-row ${index % 2 === 0 ? 'bg-slate text-white' : 'bg-amber text-black'}`}
            >
              <img src={spirit.image} alt={spirit.header} className="w-full md:w-1/3 h-auto object-contain mb-4 md:mb-0 md:mr-6" />
              <div className="flex flex-col justify-center card-content">
                <p className={`font-josefin text-2xl sm:text-3xl md:text-4xl mb-2 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>{spirit.name}</p>
                <h3 className={`text-xl sm:text-2xl md:text-3xl mb-2 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>{spirit.header}</h3>
                <p className={`text-xs sm:text-sm md:text-base mb-4 ${index % 2 === 0 ? 'text-cream' : 'text-gray-700'}`}>{spirit.alcoholStats}</p>
                <p className={`text-sm sm:text-lg md:text-xl mb-4 whitespace-pre-line ${index % 2 === 0 ? 'text-amber' : 'text-teal-700'}`}>{spirit.awards}</p>
                <p className={`text-base sm:text-lg md:text-xl mb-4 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>{spirit.description}</p>
                <button
                  onClick={spirit.onButtonClick}
                  className={`rounded-full px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 transition-colors duration-300 ${index % 2 === 0 ? 'bg-teal text-white hover:bg-green-700' : 'bg-black text-white hover:bg-gray-700'}`}
                >
                  {spirit.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spirits;
