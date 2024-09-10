import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <a href="#" className="logo"><span>Parshuram</span> Jadhav</a>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#service">Service</a>
      <a href="#project">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="follow">
      <a href="https://www.facebook.com/yourprofile"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/yourprofile"><i className="fab fa-instagram"></i></a>
      <a href="https://twitter.com/yourprofile"><i className="fab fa-twitter"></i></a> 
      <a href="https://www.linkedin.com/in/parshuram-jadhav-6465622b5/"><i className="fab fa-linkedin"></i></a>
    </div>
  </header>
);

export default Header;
