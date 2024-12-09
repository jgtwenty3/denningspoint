import React from 'react';
import BottleCard from './BottleCard';
import { bottleInfo } from '../lib/data';

const BottlesList = () => {
  return (
    <div className="bottles-list flex flex-col space-y-4">
      {bottleInfo.map((bottle, index) => (
        <BottleCard 
          key={index}
          image={bottle.image}
          description={bottle.description}
          buttonText={bottle.buttonText}
          onButtonClick={bottle.onButtonClick}
        />
      ))}
    </div>
  );
};

export default BottlesList;
