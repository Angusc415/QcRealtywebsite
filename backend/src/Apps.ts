import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './lib/mongo';
import propertyRoutes from './routes/properties';

dotenv.config();
const app = express();

// CORS middleware to allow requests from React frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json()); // for parsing JSON bodies

// Connect to DB
connectToDatabase().then(() => {
  console.log('✅ Connected to MongoDB');
});

// Routes
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3001; // Changed to 3001 to avoid conflict with React
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
