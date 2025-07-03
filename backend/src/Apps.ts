import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './lib/mongo';
import propertyRoutes from './routes/properties';
import cors from 'cors';

dotenv.config();
const app = express();

// Use CORS middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json()); // for parsing JSON bodies

// Routes
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3001;

// Connect to DB and start server only after successful connection
connectToDatabase().then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
