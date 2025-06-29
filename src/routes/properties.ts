import express from 'express';
import Property from '../models/Property';

const router = express.Router();

// GET all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  
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

export default router;