import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from "react-icons/ti";
import Button from './Button';
import { useWindowScroll } from "react-use";
import gsap from 'gsap';

const navItems = ["HOME", "ABOUT", "SPIRITS", "COCKTAILS", "SERVICES", "VISIT US", "BUY"];

const Navbar = () => {
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Button 
              id="product-button" 
              title="CONTACT US" 
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/${item === 'HOME' ? '' : item.toLowerCase()}`} 
                  className="nav-hover-btn"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
