import React from 'react'
import { useState } from "react";
import './Contact.css';
export const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    alternativeEmail: "",
    phone: "",
    projectDetails: "",
    requestNDA: false,
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // You can handle the form submission logic here
  };






  return (
    <div className='mainContainer'>

<div className="contact-and-next-container">
  {/* Contact Form Section */}
  <div className="contact-form-section">
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
        placeholder="Phone (e.g. 201-555-5555)"
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
      {/* <div className="checkbox-container">
        <input
          type="checkbox"
          name="requestNDA"
          checked={formData.requestNDA}
          onChange={handleChange}
        />
        <label>Request an NDA</label>
      </div> */}
      <button type="submit" className="send-button">
        SEND
      </button>
      <p className="privacy-policy">
        By sending this form I confirm that I have read and accept
        Intellectsoft <a href="#privacy-policy">Privacy Policy</a>
      </p>
    </form>
  </div>
</div>



    </div>
  )
}
