import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;
const connectDB = async () => {
if (!db) 
{
    try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
      console.log('✅ MongoDB connected');
    } catch (err) {
      console.error('❌ MongoDB connection failed:', err.message);
      throw err;
    }
  }
  return db;
}
export default connectDB;