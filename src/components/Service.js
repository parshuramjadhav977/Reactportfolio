import React from 'react';
import './Service.css';

const Service = () => (
  <section id="service" className="service">
    <h1 className="heading"><span>My</span> Services</h1>
    <div className="box-container">
      <div className="box">
        <i className="fas fa-paint-brush"></i>
        <h3>Frontend Developer</h3>
        <p>
          Highly motivated and detail-oriented frontend developer with a strong passion for creating
          visually appealing and user-friendly interfaces. Proficient in HTML, CSS, JavaScript, 
          and frameworks like React. Dedicated to writing clean, efficient, and well-documented code. 
          Eager to learn and adapt to new technologies and trends in the ever-evolving frontend landscape.
        </p>
      </div>
      <div className="box">
        <i className="fas fa-code"></i>
        <h3>Backend Developer</h3>
        <p>
          With a strong focus on server-side logic and database management, I develop secure, 
          efficient, and maintainable back-end systems. Leveraging Java and popular frameworks
          like Spring and Hibernate, I design and implement scalable architectures that meet the needs 
          of complex applications.
        </p>
      </div>
      <div className="box">
        <i className="fas fa-database"></i>
        <h3>Database Management</h3>
        <p>
          Efficient data storage, retrieval, and manipulation are crucial to any application. 
          I design and manage relational databases (MySQL) to ensure data consistency, scalability, 
          and performance.
        </p>
      </div>
    </div>
  </section>
);

export default Service;
