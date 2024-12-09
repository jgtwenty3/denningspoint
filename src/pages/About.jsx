import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useGSAP(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <Hero backgroundImage="/images/Spirits-2.jpg" logoImage="/images/logo.png" animationDuration={3} />
      <div className='mt-10 mx-auto max-w-7xl p-5'>
        <div className='flex flex-col md:flex-row items-center'>
          <img 
            src='/images/About-Page.jpg' 
            alt='about' 
            width={500} 
            className='rounded-lg shadow-lg shadow-black mb-8 md:mb-0 md:mr-10'
            ref={addToRefs}
          />
          <div className='flex flex-col items-start md:items-center justify-center space-y-6 text-center md:text-left'>
            <h1 className='font-josefin text-3xl' ref={addToRefs}>
              Denning's Point Distillery cultivates the rich history of the Hudson Valley, the finest locally grown grains, and the best of the region's talent to craft award-winning spirits that resonate both in the mouth and in the heart.
            </h1>
            <img src='/images/Spacer.jpg' alt='spacer' className='my-6' ref={addToRefs} />
            <div className='space-y-10'>
              <section ref={addToRefs}>
                <h2 className='font-josefin text-4xl italic text-amber'>Local History</h2>
                <p className='font-josefin text-xl'>
                  We produce spirits that herald the rich and dynamic history of the Hudson Valley in each and every sip.
                </p>
              </section>
              <section ref={addToRefs}>
                <h2 className='font-josefin text-4xl italic text-amber'>Local Grains</h2>
                <p className='font-josefin text-xl'>
                  We source grains and fruit from the proudest of family farms within 50 miles of our facility.
                </p>
              </section>
              <section ref={addToRefs}>
                <h2 className='font-josefin text-4xl italic text-amber'>Local People</h2>
                <p className='font-josefin text-xl'>
                  Deeply rooted in the historical and agricultural heart of the Hudson Valley, we are driven by a local passion that leads every experience of our spirits to illuminate the best New York State has to offer.<br />
                  Denning's Point Distillery: A Modern Interpretation of Classic Spirits.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
