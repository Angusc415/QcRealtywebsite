import { useEffect, useState } from "react";
import './Renting.css';
import { Link } from "react-router-dom";
import logo from './images/Logo.jpg';

interface Property {
  _id: string;
  address: string;
  price: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  propertytype: string;
  imageUrls: string[];
  status: string;
  description: string;
}

const Renting: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/properties?status=for%20rent")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching properties:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="Renting">
      <div className="header">
        <ul className="nav" style={{ listStyleType: 'none'}}>
          <li><img src={logo} alt="Logo" className="logo" /></li>
          <Link to='/HomePage'><li>Home</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
          <li>Projects</li>
          <Link to='/Contactus'><li>Contact Us</li></Link>
        </ul>
      </div>
      
      <div>
        <h1>Properties for Rent</h1>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <div className="property-image-wrapper">
                <img 
                  src={property.imageUrls[0]} 
                  alt={property.address} 
                  className="property-image"
                />
                <div className="property-type-pill">{property.propertytype}</div>
              </div>
              <div className="property-info">
                <div className="property-details">
                  <span className="icon-bed">🛏 {property.bedroom}</span>
                  <span className="icon-bath">🛁 {property.bathroom}</span>
                  <span className="icon-car">🚗 {property.garage}</span>
                  <span className="status">{property.status}</span>
                </div>
                <div className="property-address">{property.address}</div>
                <div className="property-price">{property.price}</div>
                <div className="property-description">{property.description}</div>
                <Link to={`/property/${property._id}`} className="property-cta-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Renting;
