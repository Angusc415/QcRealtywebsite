import { MongoClient } from 'mongodb';

// Your connection URI from MongoDB Atlas (replace with your own)
const uri = "mongodb+srv://anguschou88:kmHRwjiT8ti05xMV@cluster0.swdg6jd.mongodb.net/QC?retryWrites=true&w=majority";

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
console.log("Hello from db.ts!");

export {};

connectDB();
