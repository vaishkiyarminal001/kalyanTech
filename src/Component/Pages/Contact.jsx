import React, { useState, useEffect } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    alternativeEmail: "",
    phone: "",
    projectDetails: "",
  });

  const [activeWord, setActiveWord] = useState(0);
  const words = ["goal", "marketing", "audience"]; 

  // Word animation logic with effect cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length); // Update word every 2 seconds
    }, 2000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="contact-page">
      {/* Large Animated Text */}
      <div className="text-section">
        <h1>
          Let's talk about your{" "}
          <span className="animated-word">{words[activeWord]}</span>
        </h1>
      </div>

      {/* Contact Form */}
      <div className="form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>CONTACT US</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="businessEmail"
            placeholder="Business Email*"
            value={formData.businessEmail}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="alternativeEmail"
            placeholder="Alternative Email"
            value={formData.alternativeEmail}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="projectDetails"
            placeholder="Tell us about your project*"
            value={formData.projectDetails}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-button">SEND</button>
        </form>
      </div>
    </div>
  );
};
