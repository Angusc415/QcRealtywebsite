import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './lib/mongo';
import propertyRoutes from './routes/properties';

dotenv.config();
const app = express();

app.use(express.json()); // for parsing JSON bodies

// Connect to DB
connectToDatabase().then(() => {
  console.log('✅ Connected to MongoDB');
});

// Routes
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
