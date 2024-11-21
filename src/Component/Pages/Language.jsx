import React from 'react'
import './Language.css';

export const Language = () => {
  return (
    <div>

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
    </div>
  )
}
