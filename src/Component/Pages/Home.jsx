import React from 'react';
import './Home.css'; 
import { Carousels } from './Carousels';


export const Home = () => {
  return (
    <div className="home-container">
      
      {/* Carousal Section */}

     <Carousels/>

        {/* Tagline Section */}
        <h1 className="home-tagline">
        Empower your future with <span className="highlight">Kalyan Tech</span>
      </h1>
    
    </div>
  );
};
