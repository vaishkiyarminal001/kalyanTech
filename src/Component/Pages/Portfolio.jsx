import React from 'react';
import cs from '../Assets/comingsoon.jpg';
import './Portfolio.css'; // Importing the CSS file for styling

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <img src={cs} alt="Coming Soon" className="portfolio-image" />
    </div>
  );
};
