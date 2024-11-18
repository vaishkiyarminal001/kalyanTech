import React, { useState } from 'react';
import './Faq.css';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the average cost of web development services?",
      answer:
        "The price for web development services and web development solutions can vary from a few thousand dollars for a basic web solution to significantly more for a complex enterprise software. An Intellectsoft consultant would be happy to discuss your web development projects and offer a free, no-obligation quote.",
    },
    {
      question: "How should I prepare to partner with a web development company like Intellectsoft?",
      answer: (
        <p>
          To explore the possibility of partnering with Intellectsoft, it's best to speak with one of our advisors. To make the most of this discussion, consider preparing the following:
          <ul>
            <li><strong>Project Requirements:</strong> Have a basic outline of what you need for your project.</li>
            <li><strong>Budget:</strong> Decide on an initial budget for your web development project.</li>
            <li><strong>Timelines:</strong> Think about when you want the project completed.</li>
          </ul>
        </p>
      ),
    },
    {
      question: "Why should I hire a team of professionals to build my website?",
      answer:
        "Hiring a website development team is important for ensuring your website’s quality, usability, and security. These elements are critical for the potential success of your business.",
    },
    {
      question: "What is best for making web apps?",
      answer: (
        <p>
          Choosing the right method for making web applications depends on clearly defining your project. Consider:
          <ul>
            <li>Is it a game or a desktop application?</li>
            <li>Is it phone-based or computer-based?</li>
            <li>Is it for a large corporation or a small group of users?</li>
          </ul>
        </p>
      ),
    },
    {
      question: "How do I select the best web portal development company for my business needs?",
      answer: (
        <p>
          Selecting the right web development company or web development agency involves a few key steps:
          <ul>
            <li><strong>Experience and Expertise:</strong> Look for a company with a proven track record in web portal development.</li>
            <li><strong>Customization:</strong> Ensure they can create a customized portal for your needs.</li>
            <li><strong>Technology Stack:</strong> The company should use up-to-date technologies.</li>
            <li><strong>Communication:</strong> Ensure clear communication.</li>
            <li><strong>Research and Testing:</strong> They should conduct thorough research and testing.</li>
          </ul>
        </p>
      ),
    },
    {
      question: "What are the benefits of web portal development for businesses?",
      answer: (
        <p>
          Web portal development offers several benefits for businesses:
          <ul>
            <li><strong>Increased Communication:</strong> Improves interaction between companies and customers.</li>
            <li><strong>Cost Savings:</strong> Automates business processes, reducing operational costs.</li>
            <li><strong>Simplified Customer Service Management:</strong> Streamlines customer service processes.</li>
            <li><strong>Scalability:</strong> Allows businesses to scale their operations as they grow.</li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <section className="faq-container">
      <h2 className="faq-heading">F.A.Q.</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{faq.question}</h3>
            <span className="faq-icon">
              {activeIndex === index ? '▲' : '▼'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </section>
  );
};
