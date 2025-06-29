import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
console.log("MONGODB_URI is:", process.env.MONGODB_URI);

// Your connection URI from MongoDB Atlas (replace with your own)
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    // Select your database
    const db = client.db('QC');

    // Select a collection (like a table)
    const properties = db.collection('properties');

    // Example: Insert a document
    const result = await properties.insertOne({ address: "123 Main St", price: 500000 });
    console.log(`New property inserted with id ${result.insertedId}`);

    // You can now perform more queries here...

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
console.log("Hello from db.js!");

connectDB();
