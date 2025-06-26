import './Aboutus.css';
import logo from './images/Logo.jpg';
import {Link} from 'react-router-dom'
import iconSell from './images/icon-sell.png';
import iconBuy from './images/icon-buy.png';
import iconInvest from './images/icon-invest.png';
import iconBuyerAgent from './images/icon-buyeragent.png';
import iconOffPlan from './images/icon-offplan.png';
import iconHouseAndLand from './images/icon-houseandland.png';

function Aboutus(){
    return (
        <div className="about-us-page">
            <div className="header">
                <ul className="nav" style={{ listStyleType: 'none'}}>
                    <li><img src={logo} alt="Logo" className="logo" /></li>
                    <Link to='/homepage'><li>Home</li></Link>
                    <Link to="/aboutus"><li>About Us</li></Link>
                    <li>Projects</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <h1 className="aboutustitle">About Us</h1>

            <section className="hero-section">
                <p>Helping You Find Home, One Key at a Time</p>
            </section>

            <section className="whoarewe">
                <h2>Who We Are</h2>
                <p className="whoarewep">
                    At QC Realty, we believe your home is more than just a place — it's a reflection of your story.
                    As a boutique real estate agency, we focus on personalized service, deep local knowledge,
                    and a commitment to helping every client find the perfect place to call home.
                </p>
            </section>

            <section className="whatmakesusdifferent">
                <h2>What Makes Us Different?</h2>
                <ul>
                    <li>
                        <strong>Local Expertise</strong>
                        We know the neighborhoods, market trends, and hidden gems that make each area unique.
                    </li>
                    <li>
                        <strong>Tailored Service</strong>
                        We treat every client as an individual — no one-size-fits-all approach here.
                    </li>
                    <li>
                        <strong>Reliable Support</strong>
                        We make the entire process smooth, clear, and stress-free from start to finish.
                    </li>
                </ul>
            </section>

            {/* Info block */}
            <section className="info-block">
                <h2>Dedicated to going above and beyond</h2>
                <p>We understand that purchasing property can be overwhelming. We also know it becomes even more challenging to purchase property in Australia if English is your second language.</p>
                <p><strong>It's why we give you more.</strong></p>
                <ul>
                    <li>360-degree support and service to meet your property and personal goals.</li>
                    <li>A bespoke approach, tailored to suit you perfectly.</li>
                    <li>Added value – from finance mortgage advice to foreign currency exchange, legal advice, education and immigration consulting – at no added cost.</li>
                </ul>
                <p>We ensure the next step you take in the property market is easy and positions you to achieve the best possible outcome.</p>
            </section>

            {/* Services grid */}
            <section className="services-grid">
                <div className="service-item">
                    <img src={iconSell} alt="Sell your private home or investment property" />
                    <p>Sell your private home or investment property</p>
                </div>
                <div className="service-item">
                    <img src={iconBuy} alt="Buy the home of your dreams" />
                    <p>Buy the home of your dreams</p>
                </div>
                <div className="service-item">
                    <img src={iconInvest} alt="Invest in property for the first time, or grow your property portfolio" />
                    <p>Invest in property for the first time, or grow your property portfolio</p>
                </div>
                <div className="service-item">
                    <img src={iconBuyerAgent} alt="Act as a buyer's agent for your next property purchase" />
                    <p>Act as a buyer's agent for your next property purchase</p>
                </div>
                <div className="service-item">
                    <img src={iconOffPlan} alt="Achieve off-the-plan sales from your property development" />
                    <p>Achieve off-the-plan sales from your property development</p>
                </div>
                <div className="service-item">
                    <img src={iconHouseAndLand} alt="Attain house-and-land sales for residential builders" />
                    <p>Attain house-and-land sales for residential builders</p>
                </div>
            </section>

            <section className="letsworktogether">
                <h2>Let's Work Together</h2>
                <p>
                    QC Realty is more than a business — it's a team of passionate professionals who care about your journey.
                    We're proud to combine professional excellence with a warm, human approach that puts you first.
                </p>
                <a href="/contact" className="contact-link">Get in touch with us today →</a>
            </section>
        </div>
    );
};

export default Aboutus;