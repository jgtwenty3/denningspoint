import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-8 px-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold font-josefin">Denning's Point Distillery</h4>
          <p className='font-josefin'>10 N Chestnut St, Beacon, NY 12508</p>
          <p className='font-josefin'>Email: info@denningspointdistillery.com</p>
          <p className='font-josefin'>Phone: (555) 123-4567</p>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="list-none">
            <li className='font-josefin'>
              <a href="/" className="text-white hover:text-teal-500">Home</a>
            </li>
            <li className='font-josefin'>
              <a href="/about" className="text-white hover:text-teal-500">About Us</a>
            </li>
            <li className='font-josefin'>
              <a href="/products" className="text-white hover:text-teal-500">Products</a>
            </li>
            <li className='font-josefin'>
              <a href="/contact" className="text-white hover:text-teal-500">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-links className='font-josefin'">
          <a href="https://www.facebook.com/DenningsPointDistillery" className="text-white mx-2 hover:text-teal-500 font-josefin">Facebook</a>
          <a href="https://www.instagram.com/denningspointdistillery/" className="text-white mx-2 hover:text-teal-500 font-josefin">Instagram</a>
          <a href="https://www.twitter.com/denningsdistill" className="text-white mx-2 hover:text-teal-500 font-josefin">Twitter</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm className='font-josefin'">© {new Date().getFullYear()} Denning's Point Distillery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
