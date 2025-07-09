import './Contactus.css';
import { useRef } from 'react';
import logo from './images/Logo.jpg'
import {Link} from 'react-router-dom'

function Contactus() {
  const formRef = useRef<HTMLFormElement>(null);

  // You can add form submission logic here (e.g., send to backend or email service)

  return (
    
    <div className="contact-page">
       <div className="header">
        <ul className="nav" style={{ listStyleType: 'none'}}>
          <li><img src={logo} alt="Logo" className="logo" /></li>
          <Link to='/HomePage'><li>Home</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
          <li>Projects</li>
          <Link to='/Contactus'><li>Contact Us</li></Link>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contact QC Realty</h1>
          <p>We're here to help you on your property journey. Reach out today!</p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="contact-main-section">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div><strong>Phone:</strong> <a href="tel:0712345678">(07) 1234 5678</a></div>
            <div><strong>Email:</strong> <a href="mailto:info@qcrealty.com.au">info@qcrealty.com.au</a></div>
            <div><strong>Address:</strong> 123 Property St, Brisbane, QLD</div>
          </div>
        </div>
        <form className="contact-form" ref={formRef}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <h2>Our Office Location</h2>
        <div className="map-container">
          {/* Google Maps Embed Example */}
          <iframe
            title="QC Realty Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.019073964624!2d153.0210723150617!3d-27.47012598289259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0e3b0b0b0b%3A0x0!2zMjfCsDI4JzExLjUiUyAxNTPCsDAxJzE1LjkiRQ!5e0!3m2!1sen!2sau!4v1680000000000!5m2!1sen!2sau"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '18px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contactus;