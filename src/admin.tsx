import React, { useState, useEffect } from 'react';
import './admin.css';
import { IProperty } from './models/Property';

function Admin() {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingProperty, setEditingProperty] = useState<IProperty | null>(null);
  
  // Form state for adding/editing properties
  const [formData, setFormData] = useState<Omit<IProperty, '_id' | 'createdAt' | 'updatedAt'>>({
    address: '',
    price: 0,
    bedroom: 0,
    bathroom: 0,
    garage: 0,
    propertytype: 'house',
    imageUrl: '',
    description: ''
  });

  const API_BASE_URL = 'http://localhost:3000/api/properties';

  // Fetch all properties
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_BASE_URL);
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        setMessage('Failed to fetch properties');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  // Add new property
  const addProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const newProperty = await response.json();
        setProperties([...properties, newProperty]);
        setMessage('Property added successfully!');
        resetForm();
      } else {
        setMessage('Failed to add property');
      }
    } catch (error) {
      setMessage('Error adding property');
    } finally {
      setLoading(false);
    }
  };

  // Update property
  const updateProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProperty?._id) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${editingProperty._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const updatedProperty = await response.json();
        setProperties(properties.map(p => 
          p._id === editingProperty._id ? updatedProperty : p
        ));
        setMessage('Property updated successfully!');
        setEditingProperty(null);
        resetForm();
      } else {
        setMessage('Failed to update property');
      }
    } catch (error) {
      setMessage('Error updating property');
    } finally {
      setLoading(false);
    }
  };

  // Delete property
  const deleteProperty = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this property?')) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setProperties(properties.filter(p => p._id !== id));
        setMessage('Property deleted successfully!');
      } else {
        setMessage('Failed to delete property');
      }
    } catch (error) {
      setMessage('Error deleting property');
    } finally {
      setLoading(false);
    }
  };

  // Edit property (load into form)
  const editProperty = (property: IProperty) => {
    setEditingProperty(property);
    setFormData({
      address: property.address,
      price: property.price,
      bedroom: property.bedroom,
      bathroom: property.bathroom,
      garage: property.garage,
      propertytype: property.propertytype,
      imageUrl: property.imageUrl || '',
      description: property.description
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      address: '',
      price: 0,
      bedroom: 0,
      bathroom: 0,
      garage: 0,
      propertytype: 'house',
      imageUrl: '',
      description: ''
    });
    setEditingProperty(null);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'bedroom' || name === 'bathroom' || name === 'garage'
        ? Number(value) 
        : value
    }));
  };

  // Load properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>QC Realty Admin Panel</h1>
        <p>Manage your property listings</p>
      </div>

      {message && (
        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
          {message}
          <button onClick={() => setMessage('')}>×</button>
        </div>
      )}

      <div className="admin-content">
        {/* Add/Edit Property Form */}
        <div className="form-section">
          <h2>{editingProperty ? 'Edit Property' : 'Add New Property'}</h2>
          <form onSubmit={editingProperty ? updateProperty : addProperty} className="property-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bedroom">Bedrooms *</label>
                <input
                  type="number"
                  id="bedroom"
                  name="bedroom"
                  value={formData.bedroom}
                  onChange={handleInputChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathroom">Bathrooms *</label>
                <input
                  type="number"
                  id="bathroom"
                  name="bathroom"
                  value={formData.bathroom}
                  onChange={handleInputChange}
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="garage">Garage Spaces *</label>
                <input
                  type="number"
                  id="garage"
                  name="garage"
                  value={formData.garage}
                  onChange={handleInputChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertytype">Property Type *</label>
                <select
                  id="propertytype"
                  name="propertytype"
                  value={formData.propertytype}
                  onChange={handleInputChange}
                  required
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="unit">Unit</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Enter property description..."
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : (editingProperty ? 'Update Property' : 'Add Property')}
              </button>
              {editingProperty && (
                <button type="button" onClick={resetForm} className="cancel-btn">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Properties List */}
        <div className="properties-section">
          <h2>All Properties ({properties.length})</h2>
          <button onClick={fetchProperties} disabled={loading} className="refresh-btn">
            {loading ? 'Loading...' : 'Refresh'}
          </button>
          
          {loading ? (
            <div className="loading">Loading properties...</div>
          ) : properties.length === 0 ? (
            <div className="no-properties">No properties found. Add your first property above!</div>
          ) : (
            <div className="properties-grid">
              {properties.map((property) => (
                <div key={property._id} className="property-card">
                  {property.imageUrl && (
                    <img src={property.imageUrl} alt={property.address} className="property-image" />
                  )}
                  <div className="property-info">
                    <h3>{property.address}</h3>
                    <p className="price">${property.price.toLocaleString()}</p>
                    <div className="property-details">
                      <span>{property.bedroom} bed</span>
                      <span>{property.bathroom} bath</span>
                      <span>{property.garage} garage</span>
                      <span className="property-type">{property.propertytype}</span>
                    </div>
                    {property.description && (
                      <p className="description">{property.description}</p>
                    )}
                  </div>
                  <div className="property-actions">
                    <button onClick={() => editProperty(property)} className="edit-btn">
                      Edit
                    </button>
                    <button onClick={() => deleteProperty(property._id!)} className="delete-btn">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
