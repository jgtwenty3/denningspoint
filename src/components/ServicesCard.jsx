import React from 'react';

const ServicesCard = ({ title, subtitle, text, services }) => {
  return (
    <div className="services-card p-5 bg-white rounded-lg shadow-lg shadow-black mb-10">
      <h1 className='font-josefin text-6xl mt-5'>{title}</h1>
      <h2 className='font-josefin text-3xl text-amber mt-5'>{subtitle}</h2>
      <p className='font-josefin text-lg mt-5'>{text}</p>
      <h2 className ="font-josefin text-xl mt-5 text-amber">SERVICES:</h2>
      <ul className='mt-5 space-y-3'>
        {services.map((service, index) => (
          <li key={index} className='font-josefin text-lg text-gray-700'>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesCard;
