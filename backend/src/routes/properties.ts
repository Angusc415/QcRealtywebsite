import express from 'express';
import Property from '../models/Property';
import parser from '../lib/multer';

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Properties route is working!' });
});

// Image upload endpoint for Cloudinary
router.post('/upload', parser.array('image'), (req, res) => {
  if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  const urls = (req.files as any[]).map(file => file.path);
  res.json({ urls });
});

// GET all properties
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let filter: any = {};
    
    if (status) {
      filter.status = status;
    }
    
    const properties = await Property.find(filter);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// POST a new property
router.post('/', async (req, res) => {
  
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create property' });
  }
});

// GET a property by id
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// UPDATE a property by id
router.put('/:id', async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(updatedProperty);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update property' });
  }
});

// DELETE a property
router.delete('/:id', async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
});

export default router;