import express from 'express';
import Property from '../models/Property';

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Properties route is working!' });
});

// GET all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
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