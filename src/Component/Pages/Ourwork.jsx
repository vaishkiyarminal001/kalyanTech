import React, { useState } from "react";
import "./Ourwork.css";

export const Ourwork = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  return (
    <div className="our-work-container">
      {/* Header Section */}
      <div className="our-work-header-section">
        <h1>Empowering Businesses Online With Result Oriented Website Development</h1>
        <p>
          We are the expert partner you need to deliver scalable, innovative, and competitive results. From fully managed
          Delivery Teams to individual expert software engineers, we specialize in solid end-to-end delivery of tailor-made
          technology solutions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="our-work-cards-container">
        {/* Team Augmentation Card */}
        <div className="our-work-card">
          <div className="our-work-card-content">
            <h2>TEAM AUGMENTATION</h2>
            <p>
              An expert autonomous team capable of rapidly and efficiently delivering technology solutions and value.
            </p>
            <button className="our-work-team-btn" onClick={() => openPopup("Team Augmentation")}>
              Let’s Talk
            </button>
          </div>
        </div>

        {/* Full-Project Development Card */}
        <div className="our-work-card our-work-full-project-card">
          <div className="our-work-card-content">
            <h2>FULL-PROJECT DEVELOPMENT</h2>
            <p>
              Hire a team of dedicated professionals necessary to design, develop and launch your project.
            </p>
            <button className="our-work-full-project-btn" onClick={() => openPopup("Full-Project Development")}>
              Let’s Talk
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="our-work-popup-form">
          <button className="our-work-close-btn" onClick={() => setIsPopupOpen(false)}>
            ✕
          </button>
          <h3>{popupTitle}</h3>
          <p>Contact Us To Discuss Your Inquiry And We'll Get Back To You Shortly.</p>
          <form>
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <input type="email" placeholder="Email*" required />
            <div className="our-work-mobile-input">
              {/* <span>+91</span> */}
              <input type="text" placeholder="Mobile No." required />
            </div>
            <textarea placeholder="Tell us about your dream website. What do you have in mind?" rows="4" required></textarea>
            <button className="our-work-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
