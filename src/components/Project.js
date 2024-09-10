import React from 'react';
import './Project.css';

const Project = () => (
  <section id="project" className="project">
    <h1 className="heading"><span>My</span> Projects</h1>
    <div className="box-container">
      <div className="box">
        <h3>Hospital Management System</h3>
        <h4 style={{ fontSize: '120%' }}>Technologies used: Core Java, Advanced Java, Servlet and JSP, HTML, CSS, JavaScript, Bootstrap</h4>
        <p>
          The Hospital Management System is a modern Java-based application redesigned with Spring Boot, 
          Hibernate, and React.js. It efficiently manages hospital records, including doctors, patients, and 
          prescriptions. The backend utilizes Spring Boot and Hibernate for ORM-based CRUD operations, 
          providing a robust and scalable data management solution. The frontend is developed using React.js 
          for a dynamic and responsive user interface, incorporating features like search and report 
          generation. Adhering to the MVC pattern, the system ensures a well-organized and maintainable 
          codebase. <br />
          Link: <a href="http://pjadhav.in/">http://pjadhav.in/</a> (admin)
        </p>
      </div>
      <div className="box">
        <h3>Alumina and Job Portal</h3>
        <h4 style={{ fontSize: '120%' }}>Technologies used: Java, SQL, JSP, Servlets, Tomcat 9</h4>
        <p>
          Developed a comprehensive job portal application, “Alumina,” designed to connect job seekers with 
          potential employers. The platform provides features for job listings, resume management, and application tracking.
        </p>
      </div>
    </div>
  </section>
);

export default Project;
