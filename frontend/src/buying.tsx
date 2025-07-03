import { useEffect, useState } from "react";
import './buying.css';

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
    
    
    
    

    const API_BASE_URL = 'http://localhost:3001/api/properties';
    useEffect(() => {
    fetch(API_BASE_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data.proterties); 
        setProperties(data);
    })
    .catch(err => {
        console.error('Error fetching properties:', err);
    });
}, []);

return (
    <section className="propertydisplay">
      <h1>For Sale</h1>
      <div className="property-grid">
        {properties.map(property => (
          <div key={property._id} className="property-card">
            <div className="property-image-wrapper">
              <img
                src={(property.imageUrls && property.imageUrls[0]) ? property.imageUrls[0] : '/placeholder.jpg'}
                alt={property.address}
                className="property-image"
              />
            </div>
            <div className="property-info">
              <h2>{property.address}</h2>
              <p className="property-price">${property.price}</p>
              <div className="property-details">
                <span>{property.bedroom} bed</span>
                <span>{property.bathroom} bath</span>
                <span>{property.garage} garage</span>
                <span className="property-type">{property.propertytype}</span>
              </div>
              <p className="property-description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
console.log("hi");
export default Buying;