import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BottleCard = ({ image, description, buttonText, onButtonClick }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        ease: 'linear',
        
      }
    });

    tl.to(cardRef.current.querySelectorAll('.card-content'), {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.9,
      x:100
    });

    tl.to(cardRef.current, {
      marginBottom: -15,
      stagger: 0.5,
    }, '<');
  }, []);

  return (
    <div ref={cardRef} className="bottle-card flex bg-white border-2 border-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl max-w-4xl mx-auto">
      <div className="w-2/5 p-4">
        <img 
          src={image} 
          alt="Bottle" 
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="w-3/5 p-4 flex flex-col justify-center card-content">
        <p className="text-black font-josefin text-xl mb-4">{description}</p>
        <button 
          onClick={onButtonClick} 
          className="bg-teal text-white font-josefin rounded-full px-6 py-2 transition-colors duration-300 hover:bg-slate"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BottleCard;
