import React from 'react';
import './Home.css';
import { Carousels } from './Carousels';
import Marquee from 'react-fast-marquee';

export const Home = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <div className="home-container">
      <Marquee direction="left" speed={60} delay={10} style={{ height: '50px', width: '100%', margin: 'auto' }}>
        <h1 className="marquee-text">
          Empower your future with <span className="highlight">"Kalyan Tech"</span>
        </h1>
      </Marquee>

      {/* Carousel Section */}
      <Carousels />

      {/* Text tagline Section */}
      <div className="text-button-container">
        <div className="text-container">
        <h1>Leverage top-tier development skills for your business success</h1>
        
        <p>Discover how Intellectsoft can build a custom app tailored to your specific business needs.</p>

        </div>
        <button className="expert-button" onClick={handleWhatsAppRedirect}>
          Speak to Our Expert
        </button>
      </div>

      {/* About section */}



       {/* Web Development Services Section */}
       <h1 className="services-heading">Web Development Services We Offer</h1>
       
       <p className="services-description">
        We employ engineers with 20+ years of experience alongside talented mid-level developers<br />
        to blend expertise with fresh ideas, ensuring your software meets the latest standards.
        </p>


      {/* Cards Section */}
      <div className="services-cards">
        <div className="card">
          <h3>Full Stack Development</h3>
          <p>Highly skilled in front-end and back-end technologies, our web developers build dynamic and responsive web development solutions that bring your vision to life.</p>
        </div>
        <div className="card">
          <h3>Search Engine Optimization</h3>
          <p>Search Engine Optimization puts your Website on the early pages of the engines by the use of keywords and phrases. Our certified team excels at it.</p>
        </div>
        <div className="card">
          <h3>Social Media Marketing</h3>
          <p>Kalyan Technology stands as a top-notch company specializing in social media marketing, adeptly navigate the online landscape to boost brand exposure and interaction.</p>
        </div>
        <div className="card">
          <h3>Mobile Development</h3>
          <p>Need a trendy app to lure mobile users? We create user-friendly platforms for maximum appeal. Contact us.</p>
        </div>

      </div>
  

    </div>
  );
};
