import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from "react-icons/ti";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from './Button';
import { useWindowScroll } from "react-use";
import gsap from 'gsap';

const navItems = ["HOME", "ABOUT", "SPIRITS", "COCKTAILS", "SERVICES", "VISIT", "BUY"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Button 
              id="product-button" 
              title="CONTACT US" 
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1 font-josefin"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/${item === 'HOME' ? '' : item.toLowerCase()}`} 
                  className="nav-hover-btn font-josefin"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white">
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item, index) => (
                <li key={index} className="my-2">
                  <Link 
                    to={`/${item === 'HOME' ? '' : item.toLowerCase()}`} 
                    className="nav-hover-btn font-josefin"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
