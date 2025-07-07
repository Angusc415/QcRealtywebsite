import React, { useState, useEffect } from 'react';
import './admin.css';

interface IProperty {
  _id?: string;
  address: string;
  price: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  propertytype: string;
  imageUrls: string[];
  status: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}


function Admin() {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingProperty, setEditingProperty] = useState<IProperty | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Form state for adding/editing properties
  const [formData, setFormData] = useState<Omit<IProperty, '_id' | 'createdAt' | 'updatedAt'>>({
    address: '',
    price: '0',
    bedroom: 0,
    bathroom: 0,
    garage: 0,
    status: 'for sale',
    propertytype: 'house',
    imageUrls: [''],
    description: ''
  });

  // Replace single file state with multiple files
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const API_BASE_URL = 'http://localhost:3001/api/properties';

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

  // Update file input handler for multiple files
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  // Function to upload multiple images to backend (Cloudinary)
  const uploadImages = async (images: File[]): Promise<string[]> => {
    const urls: string[] = [];
    for (const image of images) {
      const formData = new FormData();
      formData.append('image', image);
      const response = await fetch('http://localhost:3001/api/properties/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      // If backend returns { urls: [...] }
      if (Array.isArray(data.urls)) {
        urls.push(...data.urls);
      } else if (data.url) {
        urls.push(data.url);
      } else {
        // fallback: log error
        console.log('Upload response missing urls:', data);
      }
    }
    return urls;
  };

  // Add new property
  const addProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let imageUrls = formData.imageUrls.filter((url: string) => url.trim() !== '');
    // If new images are selected, upload them
    if (selectedImages.length > 0) {
      try {
        const uploadedUrls = await uploadImages(selectedImages);
        imageUrls = [...imageUrls, ...uploadedUrls];
      } catch (err) {
        setMessage('Image upload failed');
        setLoading(false);
        return;
      }
    }
    const cleanedFormData = {
      ...formData,
      imageUrls,
    };
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedFormData),
      });
      console.log('Submitting property:', cleanedFormData);
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
    let imageUrls = formData.imageUrls.filter(
      (url: string | null | undefined) => typeof url === 'string' && url.trim() !== ''
    );
    // If new images are selected, upload them
    if (selectedImages.length > 0) {
      try {
        const uploadedUrls = await uploadImages(selectedImages);
        imageUrls = [...imageUrls, ...uploadedUrls];
      } catch (err) {
        setMessage('Image upload failed');
        setLoading(false);
        return;
      }
    }
    const cleanedFormData = {
      ...formData,
      imageUrls,
    };
    try {
      const response = await fetch(`${API_BASE_URL}/${editingProperty._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedFormData),
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
      imageUrls: property.imageUrls && property.imageUrls.length > 0 ? property.imageUrls : [''],
      description: property.description,
      status: property.status
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      address: '',
      price: '0',
      bedroom: 0,
      bathroom: 0,
      garage: 0,
      propertytype: 'house',
      imageUrls: [''],
      description: '',
      status: 'for sale'
    });
    setEditingProperty(null);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, idx?: number) => {
    const { name, value } = e.target;
    if (name === 'imageUrls' && typeof idx === 'number') {
      setFormData(prev => {
        const newUrls = [...prev.imageUrls];
        newUrls[idx] = value;
        return { ...prev, imageUrls: newUrls };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'price' || name === 'bedroom' || name === 'bathroom' || name === 'garage'
          ? Number(value) 
          : value
      }));
    }
  };

  // Add handlers to add/remove image URL fields
  const addImageUrlField = () => {
    setFormData(prev => ({ ...prev, imageUrls: [...prev.imageUrls, ''] }));
  };

  const removeImageUrlField = (idx: number) => {
    setFormData(prev => {
      const newUrls = prev.imageUrls.filter((_: string, i: number) => i !== idx);
      return { ...prev, imageUrls: newUrls.length > 0 ? newUrls : [''] };
    });
  };

  // Filter properties based on search term
  const filteredProperties = properties.filter(property => {
    const term = searchTerm.toLowerCase();
    return (
      property.address.toLowerCase().includes(term) ||
      property.propertytype.toLowerCase().includes(term) ||
      property.status.toLowerCase().includes(term)
    );
  });

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
              <label>Image URLs</label>
              {formData.imageUrls.map((url: string, idx: number) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <input
                    type="url"
                    name="imageUrls"
                    value={url}
                    onChange={e => handleInputChange(e, idx)}
                    placeholder={`Image URL (optional)`}
                    style={{ flex: 1 }}
                  />
                  {formData.imageUrls.length > 1 && (
                    <button type="button" onClick={() => removeImageUrlField(idx)} style={{ marginLeft: '0.5rem' }}>-</button>
                  )}
                  {idx === formData.imageUrls.length - 1 && (
                    <button type="button" onClick={addImageUrlField} style={{ marginLeft: '0.5rem' }}>+</button>
                  )}
                </div>
              ))}
            </div>

            <div className="form-group">
              <label>Upload Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
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

            <div className="form-group">
              <label htmlFor="status">Status *</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="for sale">For Sale</option>
                <option value="under contract">Under Contract</option>
                <option value="sold">Sold</option>
                <option value="off market">Off Market</option>
              </select>
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
          <h2>All Properties ({filteredProperties.length})</h2>
          <input
            type="text"
            placeholder="Search by address, type, or status..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ marginBottom: '1.2rem', padding: '0.7rem', width: '100%', borderRadius: '8px', border: '1.5px solid #e0e7ef', fontSize: '1rem' }}
          />
          <button onClick={fetchProperties} disabled={loading} className="refresh-btn">
            {loading ? 'Loading...' : 'Refresh'}
          </button>
          
          {loading ? (
            <div className="loading">Loading properties...</div>
          ) : filteredProperties.length === 0 ? (
            <div className="no-properties">No properties found. Add your first property above!</div>
          ) : (
            <div className="properties-grid">
              {filteredProperties.map((property) => (
                <div key={property._id} className="property-card">
                  {property.imageUrls && property.imageUrls.length > 0 && (
                    <div className="property-images-row">
                      {property.imageUrls.map((url: string, idx: number) => (
                        <img key={idx} src={url} alt={property.address + ' image ' + (idx + 1)} className="property-image" style={{ maxWidth: '100px', maxHeight: '80px', marginRight: '0.5rem', borderRadius: '6px' }} />
                      ))}
                    </div>
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
