import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://anguschou88:kmHRwjiT8ti05xMV@cluster0.swdg6jd.mongodb.net/QC?retryWrites=true&w=majority';
const dbName = 'QC';

let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (db) return db;

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  db = client.db(dbName);
  return db;
}