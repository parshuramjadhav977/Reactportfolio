import React from 'react';
import './About.css';
import parshuramImg from '../assets/parshuram.JPG';
import cv from '../assets/Parshuram_Bapurao_Jadhav.pdf';

const About = () => (
  <section className="about" id="about">
    <h1 className="heading">About <span>Me</span></h1>
    <div className="row-1">
      <div className="image">
        <img src={parshuramImg} alt="Parshuram Jadhav" />
      </div>
      <div className="content">
        <h3>My name is Parshuram Jadhav and I am a Full Stack Java Developer</h3>
        <div className="box-container">
          <div className="box">
            <p><span style={{ fontWeight: 'bold' }}>Education:</span> MCA</p>
            <p><span style={{ fontWeight: 'bold' }}>Phone:</span> 9307523573</p>
            <p style={{ textTransform: 'lowercase' }}><span style={{ fontWeight: 'bold' }}>Email:</span> <a href="mailto:jadhavparshuram977@gmail.com">jadhavparshuram977@gmail.com</a></p>
            <p><span style={{ fontWeight: 'bold' }}>LinkedIn:</span> <a href="https://www.linkedin.com/in/parshuram-jadhav-6465622b5/">https://www.linkedin.com/in/parshuram-jadhav-6465622b5/</a></p>
            <p><span style={{ fontWeight: 'bold' }}>Certification:</span> Full Stack Java by Giri's TechHub Pvt. Ltd.</p>
            <p><span style={{ fontWeight: 'bold' }}>Address:</span> Karve Nagar, Pune</p>
            <a href={cv} className="btn" download>Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
