import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import seo from '../Assets/seo.jpg';
import media from '../Assets/socialmedia.jpg';
import code from '../Assets/code.jpg';
import './Carousels.css'; // Import your CSS file

export const Carousels = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={5000} pause={false}>
        <Carousel.Item>
          <img className="carousel-image" src={seo} alt="SEO" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={media} alt="Social Media" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={code} alt="Code" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
