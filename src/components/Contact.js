import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h1 className="heading"><span>My</span> Contact</h1>
    <div className="box-container">
      <div className="box">
        <h3>Contact Information</h3>
        <p>Name: Parshuram Bapurao Jadhav</p>
        <p>Address: Karve Nagar, Pune City</p>
        <p>Email: <a href="mailto:jadhavparshuram977@gmail.com">jadhavparshuram977@gmail.com</a></p>
        <p>Phone: 9307523573</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/parshuram-jadhav-6465622b5/">https://www.linkedin.com/in/parshuram-jadhav-6465622b5/</a></p>
        <p>GitHub: <a href="https://github.com/parshuramjadhav977/NewHospital">https://github.com/parshuramjadhav977/NewHospital</a></p>
      </div>
      <div className="box1">
        <h3>Message Me</h3>
        <form action="mailto:jadhavparshuram977@gmail.com" method="post" enctype="text/plain">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
