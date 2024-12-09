import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from "../components/Hero";
import ServicesCard from '../components/ServicesCard';
import { servicesData1, servicesData2 } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: el,
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
      <Hero backgroundImage={'/images/donations.jpg'} logoImage={'/images/logo.png'} animationDuration={3} />
      <div className="mt-10 mx-auto max-w-7xl p-5">
        <div className="max-w-3xl mx-auto space-y-10">
          <div ref={addToRefs}>
            <ServicesCard
              title={servicesData1.title}
              subtitle={servicesData1.subtitle}
              text={servicesData1.text}
              services={servicesData1.services}
            />
          </div>
          <div ref={addToRefs}>
            <ServicesCard
              title={servicesData2.title}
              subtitle={servicesData2.subtitle}
              text={servicesData2.text}
              services={servicesData2.services}
            />
          </div>
          <div ref={addToRefs} className="services-card p-10 bg-white rounded-lg shadow-lg shadow-black">
            <h1 className='font-josefin text-6xl mt-5'>CONTACT</h1>
            
            <p className='font-josefin text-lg mt-5'>
              Please email <a href="mailto:info@denningspoint.com" className="text-amber">info@denningspoint.com</a> a brief description of your project and we will be happy to get your project started. 
              Please note, you will need to have already filed your TTB applications and state licenses before we can provide pricing information. 
            </p>
            <h2 className='font-josefin text-2xl text-amber mt-5'>Reach Out to Us</h2>
            <ul className='mt-5 space-y-3'>
              <li className='font-josefin text-lg text-amber'>
                <a href="mailto:info@denningspointdistillery.com">Email: info@denningspointdistillery.com</a>
              </li>
              <li className='font-josefin text-lg text-gray-700'>Phone: 845-476-8413 (messaging service)</li>
              <li className='font-josefin text-lg text-gray-700'>Address: 10 N Chestnut St, Beacon, NY 12508</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
