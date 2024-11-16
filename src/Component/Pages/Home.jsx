import React from 'react';
import './Home.css';
import { Carousels } from './Carousels';
import Marquee from 'react-fast-marquee';

export const Home = () => {
  return (
    <div className="home-container">
      <Marquee direction="left" speed={60} delay={10} style={{ height: '50px', width: '100%', margin: 'auto', }}>
        <h1 className="marquee-text">
          Empower your future with <span className="highlight">"Kalyan Tech"</span>
        </h1>
      </Marquee>
      
      {/* Carousel Section */}
      <Carousels />

     
      
    </div>
  );
};
