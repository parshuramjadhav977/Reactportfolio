import React from 'react';
import './Home.css';

const Home = () => (
  <section className="home" id="home">
    <div className="home-container">
      <div className="profile">
        <h1>Parshuram Jadhav</h1>
        <p className="title">Full Stack Java Developer</p>
        <p className="description">
          Enthusiastic and dedicated Full Stack Developer with extensive experience in building dynamic web applications using React.js and Spring Boot. Proficient in JavaScript for frontend development and skilled in Core Java and Advanced Java for robust backend solutions. Knowledgeable in version control using Git and GitHub. Passionate about leveraging these skills to create efficient and scalable applications.
        </p>
        <a href="#about" className="btn">More Info</a>
      </div>
    </div>
  </section>
);

export default Home;
