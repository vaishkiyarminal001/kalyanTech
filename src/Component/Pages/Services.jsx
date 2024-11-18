import React, { useState } from 'react';
import './Services.css';

import serviceImage1 from '../Assets/p1.jpg'
import serviceImage2 from '../Assets/p2.jpg';
import serviceImage3 from '../Assets/p3.jpg';

// Service details
const servicesData = [
  {
    id: 1,
    title: "Website Design & Development",
    image: serviceImage1,
    description: "We create user-friendly, responsive, and beautiful websites tailored to your business needs. Our design process ensures optimal performance and user experience."
  },
  {
    id: 2,
    title: "Mobile App Development",
    image: serviceImage2,
    description: "We build high-performance mobile applications for both iOS and Android platforms. Our apps are designed to enhance user engagement and provide seamless experiences."
  },
  {
    id: 3,
    title: "Search Engine Optimization (SEO)",
    image: serviceImage3,
    description: "Our SEO services ensure your website ranks high in search results, increasing organic traffic and visibility. We focus on on-page, off-page SEO strategies and technical optimizations."
  },
  {
    id: 4,
    title: "Graphics & Logo Design",
    image: serviceImage3,
    description: "Our design team specializes in creating impactful and memorable logos, graphics, and brand identities that resonate with your target audience."
  },
  {
    id: 5,
    title: "Social Media Marketing",
    image: serviceImage3,
    description: "We offer comprehensive social media marketing services to increase engagement and drive traffic across platforms like Facebook, Instagram, Twitter, and LinkedIn."
  },
  {
    id: 6,
    title: "Website Maintenance",
    image: serviceImage3,
    description: "Our website maintenance services ensure that your website remains up-to-date, secure, and performs optimally with regular updates and monitoring."
  },
  {
    id: 7,
    title: "Testing & QA",
    image: serviceImage3,
    description: "We provide thorough testing and QA services to ensure that your product is free from bugs, delivers excellent user experiences, and performs well across all platforms."
  },
  {
    id: 8,
    title: "UX/UI Design",
    image: serviceImage3,
    description: "We design intuitive and visually appealing user interfaces, focusing on providing the best user experience for web and mobile applications."
  },
  {
    id: 9,
    title: "Google Ads Management",
    image: serviceImage3,
    description: "Our team manages your Google Ads campaigns to drive relevant traffic, improve conversion rates, and ensure you get the most out of your advertising budget."
  }
];

export const Services = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to open the popup with selected service details
  const openPopup = (service) => {
    setSelectedService(service);
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setSelectedService(null);
  };

  // Function to close the popup when the overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="svc-container">

      <div className="svc-tagline">
        <h1>Discover Our Expertise</h1>
        <p>Providing cutting-edge solutions tailored to your needs.</p>
      </div>

      {/* Services Section */}
      <div className="svc-list">
        {servicesData.map((service) => (
          <div className="svc-card" key={service.id} onClick={() => openPopup(service)}>
            <img src={service.image} alt={service.title} className="svc-img" />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedService && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>{selectedService.title}</h2>
            <img src={selectedService.image} alt={selectedService.title} className="popup-img" />
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
