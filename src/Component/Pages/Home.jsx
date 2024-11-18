import React from 'react';
import './Home.css';
import { Carousels } from './Carousels';
import { Faq } from './Faq';
import Marquee from 'react-fast-marquee';
import dummy from '../Assets/dummy.jpg';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };


  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact');
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

      {/* web solution */}

      <h1 className="services-heading">Get a Ready-Made web solution</h1>

      <p className="services-description">
        We're constantly testing, updating, and refining our web development processes to ensure we meet all quality standards and deliver the very best.<br />
        Our developers stay on top of the latest innovations, making sure your project benefits from the newest technologies. Your web development solutions will feature:
      </p>

      {/* Features Container - Side by side Image and Text */}
      <div className="features-container">
        {/* Image - Right side */}
        <div className="features-image">
          <img src={dummy} alt="Custom Features" />
        </div>

        {/* Text in Points - Left side */}


        <div className="features-section">
          <ul className="features-list">
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Custom Features:</strong> Designed to meet your specific
              needs and requirements.
            </li>
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Intuitive UI/UX Design:</strong> Visually appealing,
              accessible, and inclusive. Ensuring easy navigation and high
              customer satisfaction.
            </li>
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Scalability and Security:</strong> Built-in scalability
              and industry-standard security from the start.
            </li>
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Responsive Design:</strong> Your website will adjust
              flawlessly to any screen size, any device.
            </li>
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Professional Imagery:</strong> High-quality, engaging
              visuals that capture your brand's essence.
            </li>
            <li>
              <span className="check-icon">✔</span>{" "}
              <strong>Ongoing Maintenance and Support:</strong> Continuous
              support and updates to keep your solution running smoothly.
            </li>
          </ul>
        </div>
      </div>


      {/* Right: Features Section */}



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


      {/* Technology Stack Section */}
      <section className="technology-stack">
        <h1>Our Technology Stack</h1>
        <p>
          Our incredible engineers, including seasoned professionals with years of expertise and
          talented mid-level developers, ensure comprehensive coverage for your entire development
          stack. Your application will be expertly handled.
        </p>

        {/* Categories */}
        <div className="tech-stack-categories">
          {/* Languages */}
          <div className="tech-category">
            <h2>Languages</h2>
            <div className="tech-items">
              <button>Java</button>
              <button>C#</button>
              <button>C/C++</button>
              <button>ObjectiveC</button>
              <button>Python</button>
              <button>Groovy</button>
              <button>Swift</button>
              <button>Kotlin</button>
              <button>PHP</button>
              <button>Rust</button>
              <button>Scala</button>
            </div>
          </div>

          {/* Frameworks */}
          <div className="tech-category">
            <h2>Frameworks</h2>
            <div className="tech-items">
              <button>JDBC/SPA</button>
              <button>JMS</button>
              <button>Hibernate</button>
              <button>.Net</button>
              <button>EJB</button>
              <button>Apache Camel</button>
              <button>Firebase</button>
              <button>Node JS</button>
              <button>LDAP/Active Directory</button>
              <button>Reactive (Akka, RxJava, Reactor)</button>
            </div>
          </div>

          {/* Cloud */}
          <div className="tech-category">
            <h2>Cloud</h2>
            <div className="tech-items">
              <button>Amazon Web Services (AWS)</button>
              <button>Google Cloud</button>
              <button>Oracle Cloud</button>
              <button>IBM Cloud</button>
              <button>Microsoft Azure</button>
            </div>
          </div>

          {/* Mobile */}
          <div className="tech-category">
            <h2>Mobile</h2>
            <div className="tech-items">
              <button>iOS</button>
              <button>Android</button>
              <button>HTML5</button>
              <button>React</button>
              <button>Xamarin</button>
              <button>JavaScript</button>
            </div>
          </div>

          {/* Web */}
          <div className="tech-category">
            <h2>Web</h2>
            <div className="tech-items">
              <button>Vue</button>
              <button>Sass</button>
              <button>Coffee</button>
              <button>Angular</button>
              <button>WebGL</button>
            </div>
          </div>

          {/* Database Management */}
          <div className="tech-category">
            <h2>Database Management</h2>
            <div className="tech-items">
              <button>NoSQL</button>
              <button>MySQL</button>
              <button>Oracle SQL</button>
              <button>PostgreSQL</button>
              <button>Microsoft SQL</button>
            </div>
          </div>
        </div>
      </section>


      {/* talk to us */}

      <div className="team-container">
        <div>
          <h1>Our team will deliver optimal functionality<br /> and user experience</h1>
        </div>
        <button onClick={handleContactRedirect}>
          Talk To Us
        </button>
      </div>

      {/* company offers */}

      <div className="company-offer">
        <h1>What our Web Development Company Offers</h1>
        <p>
          At Intellectsoft, we design web products that make your brand stand out and deliver impactful business results. Recognized for our award-winning services, we ensure your web software is customer-centric, user-friendly, and up-to-date with the latest technology. Here’s a quick look at what we offer:
        </p>


        <div class="services-container">
          <div class="service-item">
            <h2>Custom solution development</h2>
            <p>Our team designs custom web development solutions tailored specifically to your business needs</p>
          </div>

          <div class="service-item">
            <h2>UX / UI Design</h2>
            <p>Honored as a top design firm with a Top Design Firm Award, we have even more creative ideas to discuss with you.</p>
          </div>

          <div class="service-item">
            <h2>Full Stack Development</h2>
            <p>Highly skilled in front-end and back-end technologies, our web developers build dynamic and responsive web development solutions that bring your vision to life.</p>
          </div>

          <div class="service-item">
            <h2>Testing and QA</h2>
            <p>Our testing and QA services ensure your web application is reliable, secure, and performs perfectly across all devices and browsers.</p>
          </div>

          <div class="service-item">
            <h2>Re-engineering of Legacy products</h2>
            <p>Got an old system that needs a refresh? We can re-engineer your legacy products, updating them with modern technologies and functionalities to help you scale, improve performance and user experience.</p>
          </div>

          <div class="service-item">
            <h2>Continuous support</h2>
            <p>We’re here for you even after your site goes live. Our continuous support and maintenance services keep your web application up-to-date, secure, and running smoothly.</p>
          </div>

          <div class="service-item">
            <h2>Integration services</h2>
            <p>Are you looking to link your web app with other systems? Our integration services ensure flawless connectivity and data exchange with other platforms.</p>
          </div>

          <div class="service-item">
            <h2>Data analytics</h2>
            <p>Our data analytics services help you gather, analyze, and interpret data to make smart decisions that drive growth and improve customer satisfaction.</p>
          </div>
        </div>

      </div>


      {/* FAQ */}

      <Faq/>



    </div>
  );
};
