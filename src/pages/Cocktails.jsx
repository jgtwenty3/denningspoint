import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import { cocktails } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  const spiritsRef = useRef([]);
  spiritsRef.current = [];

  const addToRefs = (el) => {
    if (el && !spiritsRef.current.includes(el)) {
      spiritsRef.current.push(el);
    }
  };

  useGSAP(() => {
    spiritsRef.current.forEach((spirit, index) => {
      gsap.fromTo(spirit,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: spirit,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Hover effect for each cocktail card
      const cocktailCards = spirit.querySelectorAll('.cocktail-card');
      cocktailCards.forEach((card) => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(card, { scale: 1.1, duration: 0.3, ease: 'power1.inOut' });

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });
    });
  }, []);

  return (
    <div className="font-josefin">
      <Hero backgroundImage={"/images/Cocktails-2.jpg"} logoImage={"/images/logo.png"} animationDuration={3}/>
      <div className="mt-10 mx-auto max-w-7xl p-5">
        
        {cocktails.map((spirit, index) => (
          <div key={index} className="mb-10 flex flex-col md:flex-row items-start" ref={addToRefs}>
            <div className="md:w-1/3 w-full mb-5 md:mb-0">
              <img src={spirit.image} alt={spirit.spiritName} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:w-2/3 w-full md:pl-10">
              <h3 className="text-3xl mb-5">{spirit.spiritName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {spirit.cocktails.map((cocktail, idx) => (
                  <div key={idx} className="cocktail-card bg-white rounded-lg shadow-lg shadow-black overflow-hidden">
                    <div className="p-5">
                      <h4 className="text-2xl mb-2">{cocktail.cocktailName}</h4>
                      <div className="text-sm text-gray-700 mb-4">
                        {cocktail.cocktailIngredients.map((ingredient, i) => (
                          <p key={i}>{ingredient}</p>
                        ))}
                      </div>
                      <p className="text-lg mb-4">{cocktail.cocktailInstructions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocktails;


