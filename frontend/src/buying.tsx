import { useEffect, useState } from "react";
import './buying.css';
import { Link } from "react-router-dom";
import logo from './images/Logo.jpg';

// Define the Property interface
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

function Buying() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setsearch] = useState('');
  const [bedFilter, setBedFilter] = useState('');
  const [bathFilter, setBathFilter] = useState('');
  const [garageFilter, setGarageFilter] = useState('');

  const API_BASE_URL = 'http://localhost:3001/api/properties?status=for%20sale';
  useEffect(() => {
    fetch(API_BASE_URL)
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => {
        console.error('Error fetching properties:', err);
      });
  }, []);

  // Filter properties based on search term and dropdowns
  const filteredProperties = properties.filter(property => {
    const term = search.toLowerCase();
    const bedMatch = !bedFilter || (bedFilter === '4' ? property.bedroom >= 4 : property.bedroom === Number(bedFilter));
    const bathMatch = !bathFilter || (bathFilter === '4' ? property.bathroom >= 4 : property.bathroom === Number(bathFilter));
    const garageMatch = !garageFilter || (garageFilter === '4' ? property.garage >= 4 : property.garage === Number(garageFilter));
    const textMatch =
      property.address.toLowerCase().includes(term) ||
      property.propertytype.toLowerCase().includes(term) ||
      property.status.toLowerCase().includes(term);
    return bedMatch && bathMatch && garageMatch && textMatch;
  });

  return (
    <div className="buying-page">
      {/* Header/Nav */}
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
      <section className="buying-hero-section">
        <div className="buying-hero-overlay" />
        <div className="buying-hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Browse our curated selection of properties for sale in Brisbane and beyond.</p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="buying-search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by address, type, or status..."
            value={search}
            onChange={e => setsearch(e.target.value)}
          />
        </div>
        <div className="filter-container">
          <select value={bedFilter} onChange={e => setBedFilter(e.target.value)}>
            <option value="">Bedrooms</option>
            <option value="1">1 Bedrooms</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
          <select value={bathFilter} onChange={e => setBathFilter(e.target.value)}>
            <option value="">Bathrooms</option>
            <option value="1">1 Bathrooms</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4+ Bathrooms</option>
          </select>
          <select value={garageFilter} onChange={e => setGarageFilter(e.target.value)}>
            <option value="">Parking</option>
            <option value="1">1 Parking</option>
            <option value="2">2 Parking</option>
            <option value="3">3 Parking</option>
            <option value="4">4+ Parking</option>
          </select>
        </div>
      </section>

      {/* Property Grid */}
      <section className="buying-property-section">
        <div className="property-grid">
          {filteredProperties.length === 0 ? (
            <div className="no-properties">No properties found. Try adjusting your search or filters.</div>
          ) : (
            filteredProperties.map(property => (
              <div key={property._id} className="property-card">
                <div className="property-image-wrapper">
                  <img
                    src={(property.imageUrls && property.imageUrls[0]) ? property.imageUrls[0] : '/placeholder.jpg'}
                    alt={property.address}
                    className="property-image"
                  />
                  <div className="property-type-pill">{property.propertytype.toUpperCase()}</div>
                </div>
                <div className="property-info">
                  <div className="property-details-row">
                    <span className="icon-bed">🛏 {property.bedroom}</span>
                    <span className="icon-bath">🛁 {property.bathroom}</span>
                    <span className="icon-car">🚗 {property.garage}</span>
                    <span className="status">{property.status}</span>
                  </div>
                  <div className="property-address">{property.address}</div>
                  <div className="property-price">{property.price}</div>
                  <div className="property-description">{property.description}</div>
                  <Link to={`/property/${property._id}`} className="property-cta-btn">View Details</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="buying-cta-section">
        <h2>Ready to take the next step?</h2>
        <p>Contact our team today to schedule a viewing or get expert advice on your property journey.</p>
        <a href="/contact" className="buying-cta-btn">Contact an Agent</a>
      </section>
    </div>
  );
}

export default Buying;