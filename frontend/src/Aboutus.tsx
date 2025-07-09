import './Aboutus.css';
import logo from './images/Logo.jpg';
import {Link} from 'react-router-dom'
import iconSell from './images/icon-sell.png';
import iconBuy from './images/icon-buy.png';
import iconInvest from './images/icon-invest.png';
import iconBuyerAgent from './images/icon-buyeragent.png';
import iconOffPlan from './images/icon-offplan.png';
import iconHouseAndLand from './images/icon-houseandland.png';
import founder from './images/founder.png';
import hazel from './images/hazel-wang-lead-agent.jpg';
import jing from './images/jing-gao-sales-agent.jpg';
import kelly from './images/kelly-huang-sales-agent.jpg';
import sandra from './images/sandra-liu-sales-agent.jpg';
import stella from './images/stella-sales-agent.jpg';
import bannie from './images/bannie-huang-marketing-specialist.jpg';
import zoe from './images/zoe-sheung-admin.jpg';


function Aboutus(){
    return (
        //parent container for the about us page
        <div className="about-us-page">
            <div className="header">
        <ul className="nav" style={{ listStyleType: 'none'}}>
          <li><img src={logo} alt="Logo" className="logo" /></li>
          <Link to='/HomePage'><li>Home</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
          <li>Projects</li>
          <Link to='/Contactus'><li>Contact Us</li></Link>
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

      {/* Founder Highlight */}
      <section className="about-founder-section">
        <div className="about-founder-img-wrap">
          <img src={founder} alt="Founder" className="about-founder-img" />
        </div>
        <div className="about-founder-content">
          <h2>Founded On Proven Success</h2>
          <p>Our founder and principal Shanny Zhao has more than a decade of experience in property, and has been recognised as a leader in real estate as a recipient of the Australian Top #1 Sale award for eight consecutive years.</p>
          <p>With a personal sales value nearing $500 million and having helped thousands of customers to purchase property in Australia, Shanny's depth of experience brings significant advantage to her customers.</p>
          <blockquote>“My goal is simple: connect my customers with properties that match their needs perfectly, and build lifelong relationships with the customers I serve.”</blockquote>
        </div>
      </section>

<section className="ourteam">
                <h2 className="ourteamh2">Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <img src={hazel} alt="Hazel Wang" />
                        <div className="team-card-overlay">
                            <h3>Hazel Wang</h3>
                            <p>Lead Agent</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={jing} alt="Jing Gao" />
                        <div className="team-card-overlay">
                            <h3>Jing Gao</h3>
                            <p>Sales Agent</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={kelly} alt="Kelly Huang" />
                        <div className="team-card-overlay">
                            <h3>Kelly Huang</h3>
                            <p>Sales Agent</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={sandra} alt="Sandra Liu" />
                        <div className="team-card-overlay">
                            <h3>Sandra Liu</h3>
                            <p>Sales Agent</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={stella} alt="Stella" />
                        <div className="team-card-overlay">
                            <h3>Stella</h3>
                            <p>Sales Agent</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={bannie} alt="Bannie Huang" />
                        <div className="team-card-overlay">
                            <h3>Bannie Huang</h3>
                            <p>Marketing Specialist</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={zoe} alt="Zoe Sheung" />
                        <div className="team-card-overlay">
                            <h3>Zoe Sheung</h3>
                            <p>Admin</p>
                        </div>
                    </div>
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