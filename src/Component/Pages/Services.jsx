import React, { useState } from 'react';
import './Services.css';

import serviceImage1 from '../Assets/p1.jpg';
import serviceImage2 from '../Assets/p2.jpg';
import serviceImage3 from '../Assets/p3.jpg';
import qa from '../Assets/qa.png';
import seos from '../Assets/seos.png';
import sm from '../Assets/sm.png';
import ui from '../Assets/uiux.jpg';
import wm from '../Assets/wm.png';
import gd from '../Assets/gdlogo.png';

// Service details
const servicesData = [
  {
    id: 1,
    title: "Website Design & Development",
    image: serviceImage1,
    description: "We create user-friendly, responsive, and beautiful websites tailored to your business needs. Our design process ensures optimal performance and user experience. By leveraging the latest technologies and best practices, we craft websites that not only look stunning but also drive engagement and conversions. From seamless navigation to fast load times, every aspect of your website is optimized to deliver value to your audience and support your business goals. Whether you need an e-commerce platform, a corporate site, or a personal portfolio, we bring your vision to life with precision and creativity."
  },
  {
    id: 2,
    title: "Mobile App Development",
    image: serviceImage2,
    description: "We build high-performance mobile applications for both iOS and Android platforms, tailored to meet your unique business needs. Our apps are designed to enhance user engagement, provide seamless experiences, and deliver exceptional performance under all conditions. By leveraging the latest technologies and industry best practices, we ensure scalability, security, and intuitive functionality. From conceptualization to deployment, we prioritize user-centric design and robust development to drive success in an increasingly mobile-first world"
  },
  {
    id: 3,
    title: "Search Engine Optimization (SEO)",
    image: seos,
    description: "Our SEO services ensure your website ranks high in search results, increasing organic traffic and visibility. We focus on on-page, off-page SEO strategies, and technical optimizations to provide a comprehensive approach. From keyword research and content optimization to backlink building and mobile-friendly enhancements, we tailor our solutions to meet your business goals. With regular performance analysis and adaptive strategies, we ensure your website stays ahead of the competition in the ever-changing digital landscape. Trust us to turn clicks into customers and drive long-term growth for your brand."
  },
  {
    id: 4,
    title: "Graphics Design & Logo Design",
    image: gd,
    description: "Our design team specializes in creating impactful and memorable logos, graphics, and brand identities that resonate with your target audience. We combine creativity with strategic thinking to craft designs that not only capture attention but also tell your brand’s unique story. Whether you need a new logo, a complete visual identity, or custom graphics, our team ensures every design element aligns with your brand values and speaks to your customers. We focus on delivering high-quality, versatile designs that can grow with your business and make a lasting impression across all platforms."
  },
  {
    id: 5,
    title: "Social Media Marketing",
    image: sm,
    description: "We offer comprehensive social media marketing services to increase engagement and drive traffic across platforms like Facebook, Instagram, Twitter, and LinkedIn. Our tailored strategies help build brand awareness, foster community engagement, and drive conversions. By creating targeted content, leveraging analytics, and optimizing ad campaigns, we ensure that your brand stands out in the competitive digital landscape. Whether you're looking to grow your online presence, enhance customer interactions, or generate quality leads, our expert team is dedicated to delivering measurable results and sustainable growth."
  },
  {
    id: 6,
    title: "Website Maintenance",
    image: wm,
    description: "Our website maintenance services ensure that your website remains up-to-date, secure, and performs optimally with regular updates and monitoring. We proactively identify and fix potential issues, optimize speed, and implement security patches to protect against threats. Our team ensures that your content is fresh, relevant, and aligned with the latest trends, keeping your site user-friendly and engaging. Whether it's updating plugins, managing backups, or troubleshooting bugs, we provide comprehensive support to maintain peak website performance and ensure a seamless user experience."
  },
  {
    id: 7,
    title: "Testing & QA",
    image: qa,
    description: "We provide thorough testing and QA services to ensure that your product is free from bugs, delivers excellent user experiences, and performs well across all platforms. Our comprehensive testing process covers functional, usability, and performance testing, ensuring every feature operates smoothly. We also focus on cross-browser and cross-device compatibility to guarantee consistent quality for all users. With our rigorous QA methods, we help identify potential issues early in the development cycle, reducing future risks and enhancing the overall reliability of your product. Our goal is to deliver a flawless product that meets and exceeds your expectations."
  },
  {
    id: 8,
    title: "UX/UI Design",
    image: ui,
    description: "We design intuitive and visually appealing user interfaces, focusing on providing the best user experience for web and mobile applications. Our approach blends creativity with functionality, ensuring that each design is not only aesthetically pleasing but also highly usable. By conducting thorough user research and utilizing modern design principles, we create interfaces that are seamless, engaging, and easy to navigate. Whether it's a mobile app or a complex web platform, we strive to enhance user satisfaction and drive meaningful interactions through innovative design solutions."
  },
  {
    id: 9,
    title: "Google Ads Management",
    image: serviceImage3,
    description: "Our team manages your Google Ads campaigns to drive relevant traffic, improve conversion rates, and ensure you get the most out of your advertising budget. We analyze your audience, conduct thorough keyword research, and optimize your ad performance to reach the right customers at the right time. By continuously monitoring and adjusting your campaigns, we maximize ROI, increase visibility, and help your business grow. Whether you're looking to increase website visits, boost sales, or promote brand awareness, our tailored Google Ads strategies deliver measurable results."
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
          <div className="svc-card" key={service.id}>
            <img src={service.image} alt={service.title} className="svc-img" />
            <h3>{service.title}</h3>
            <div className="InstrumentBtn">
              <div
                className="Btntext"
                onClick={() => openPopup(service)}
              >
                <span>&#x2794;</span>
                Read More
              </div>
            </div>
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
