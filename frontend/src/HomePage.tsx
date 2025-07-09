import './HomePage.css'; // Make sure the path is correct
import buyingImage from './images/buying.png'; // adjust path as needed
import sellingImage from './images/selling.jpg';
import rentingImage from './images/renting.jpg';
import logo from './images/Logo.jpg';
import partner1 from './images/partner1.svg';
import partner2 from './images/partner2.svg';
import partner3 from './images/partner3.svg';
import partner4 from './images/partner4.svg';
import partner5 from './images/partner5.svg';
import partner6 from './images/partner6.svg';
import partner7 from './images/partner7.svg';
import partner8 from './images/partner8.svg';
import partner9 from './images/partner9.svg';

import {Link} from "react-router-dom";




function HomePage() {
    return (
<div className="homePagebackground">
      <div className="header">
        <ul className="nav" style={{ listStyleType: 'none'}}>
          <li><img src={logo} alt="Logo" className="logo" /></li>
          <li>Home</li>
          <Link to="/aboutus"><li>About Us</li></Link>
          <li>Projects</li>
          <Link to='/Contactus'><li>Contact Us</li></Link>
        </ul>
      </div>

      <div className="titleBanner">
        <h1 className="titleBannerText1">QC Realty</h1>
        <h2 className="titleBannerText2">More Than Property</h2>
      </div>



      <div className="aboutUs">
        <h1 className="aboutUsh1">Explore QC Realty</h1>

            <p className="aboutUsp">QC Realty is a boutique agency delivering elevated service and exceptional results through tailored property solutions. 
              We go beyond traditional agencies, offering 360° support to help you achieve your personal and property goals.</p>

                <button>find out more</button>
      </div>


 





<section className="buyingsellingrenting">
  <div className="image-card">
    <div className="image-container">
      <Link to="/buying"><img src={buyingImage} alt="Buying" /></Link>
      <div className="hover-label">Discover</div>
    </div>
    <div className="static-label">Buying</div>
  </div>
  
  <div className="image-card">
    <div className="image-container">
      <img src={sellingImage} alt="Selling" />
      <div className="hover-label">Discover</div>
    </div>
    <div className="static-label">Selling</div>
  </div>
  
  <div className="image-card">
    <div className="image-container">
    <Link to='/Renting'> <img src={rentingImage} alt="Renting" /></Link>
      <div className="hover-label">Discover</div>
    </div>
  < div className="static-label">Renting</div>
  </div>
</section>





















      <section id="featured-homes">
        <h2>Featured Homes</h2>
        <p className="featured-blurb">
          Discover our handpicked selection of standout properties, chosen for their unique features and exceptional value. Contact us to learn more about our current featured listings!
        </p>
        <button className="featured-btn">See All Listings</button>
      </section>



      <section id="partnerassociations">
        <h2>Proud Partner Associations</h2>
        <p className="partner-blurb">At QC Realty, our trusted partner associations empower us to deliver a truly comprehensive service for our clients.
           By collaborating with leading industry professionals—from finance and legal experts to builders and property managers—we ensure you have access to the best advice, exclusive opportunities, and a seamless property journey. 
           Our partnerships mean you benefit from a wider network, more resources, and tailored solutions every step of the way.
        </p>
        <ul className="partner-list">
          <li><img src={partner1} alt="partner1" /></li>
          <li><img src={partner2} alt="partner2" /></li>
          <li><img src={partner3} alt="partner3" /></li>
          <li><img src={partner4} alt="partner4" /></li>
          <li><img src={partner5} alt="partner5" /></li>
          <li><img src={partner6} alt="partner6" /></li>
          <li><img src={partner7} alt="partner7" /></li>
          <li><img src={partner8} alt="partner8" /></li>
          <li><img src={partner9} alt="partner8" /></li>

        </ul>
      </section>
  







        <div className="contactuspage">
           <h2>Contact Us</h2>
  
  <form className="contactForm">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="Your name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Your email" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" placeholder="Your message" required></textarea>

    <button type="submit">Send Message</button>
  </form>
        </div>


<footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>QC Realty</h3>
      <p>More than property - we're your partners in finding the perfect place to call home.</p>
      {/* <div className="social-icons">
        <a href="/"><i className="fab fa-facebook-f"></i></a>
        <a href="/"><i className="fab fa-instagram"></i></a>
        <a href="/"><i className="fab fa-linkedin-in"></i></a>
        <a href="/"><i className="fab fa-twitter"></i></a>
      </div> */}
    </div>
    
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul className="footer-links">
        <li><a href="#">Home</a></li>
        <li className="listend"><a href="#">About Us</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    
    <div className="footer-section">
      <h3>Contact Us</h3>
      <div className="contact-info">
        <p><i className="fas fa-map-marker-alt"></i> 123 Property St, Brisbane, QLD</p>
        <p><i className="fas fa-phone"></i> (07) 1234 5678</p>
        <p><i className="fas fa-envelope"></i> info@qcrealty.com.au</p>
      </div>
    </div>
    
    <div className="footer-section">
      <h3>Business Hours</h3>
      <p>Monday - Friday: 9am - 5pm</p>
      <p>Saturday: 10am - 4pm</p>
      <p>Sunday: Closed</p>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} QC Realty. All rights reserved. | Privacy Policy | Terms & Conditions</p>
  </div>
</footer>









    </div>
    )}

export default HomePage;
