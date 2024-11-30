import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./About.css";
import hand from '../Assets/hand.jpg';
import aboutus from '../Assets/aboutus.png';
import { FaLightbulb, FaHandHoldingHeart, FaHandshake } from "react-icons/fa"; // Icons for the core values

export const About = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div className="about-page">
      {/* Hero Section */}
      <img src={aboutus} alt="About us" />


        {/* Mission and Core Values Section */}
        <div className="about-mission-values">
        <h2>Why Choose Kalyan Tech?</h2>
        <p>
          Our mission is to provide cutting-edge solutions that help small, medium, and large organisations establish a strong online presence, increase productivity, and produce significant revenue.
        </p>
        <div className="core-values">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>Imagine what is possible. Foster creativity that challenges constraints and drives progress.</p>
          </div>
          <div className="value-card">
            <FaHandHoldingHeart className="value-icon" />
            <h3>Integrity</h3>
            <p>Uphold the highest ethical standards and promote trust and respect.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Commitment</h3>
            <p>Provide ongoing technical support and help at all stages with a strong focus on timely delivery.</p>
          </div>
        </div>
      </div>


      {/* High Quality Tactical Solutions Section */}
      <div className="about-tactical-solutions">
        <h2>High Quality Tactical Solutions</h2>
        <p>We are Professional and Expert Digital Agency</p>
        <p>
          We’re an efficient, agile, and fully remote team of highly experienced individuals. We have been assisting individuals, startups, small to mid-size business owners, marketing managers, and organisations from all over the world for more than a decade in realizing their online objectives.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="about-statistics">
        <div className="stat">
          <h3>500+</h3>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>450+</h3>
          <p>Clients</p>
        </div>
      </div>



    
      <div className="about-cta">
  <div className="cta-content">
    <img
      src={hand}
      alt="Handshake representing collaboration"
      className="cta-image"
    />
    <div className="cta-text">
      <h3>Get Started with your Project or Take Existing one to Next Level</h3>
      <button className="gradient-button" onClick={() => navigate('/contact')}>Contact Now</button>
    </div>
  </div>
</div>


    </div>
  );
};
