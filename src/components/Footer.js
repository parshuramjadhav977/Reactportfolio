import React from 'react';
import './Footer.css'; // Add footer-specific styles here

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Parshuram Jadhav. All rights reserved.</p>
  </footer>
);

export default Footer;
