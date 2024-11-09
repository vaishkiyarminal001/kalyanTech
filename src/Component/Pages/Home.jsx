import React from 'react';
import './Home.css'; // Import the CSS file
import homeVideo from "../Assets/homevid.mp4"; // Import the video from Assets folder

export const Home = () => {
  return (
    <div className="home-container">
      {/* <h1 className="home-title">Welcome to Home Page</h1> */}

      {/* Video Section */}
      {/* <div className="video-container">
        <video className="home-video" autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div> */}


        {/* Tagline Section */}
        <h1 className="home-tagline">
        Empower your future with <span className="highlight">Kalyan Tech</span>
      </h1>
      
    </div>
  );
};
