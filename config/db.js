import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
let db = null;

if (!uri) {
  throw new Error('❌ Missing MongoDB URL in environment variables.');
}
if (!dbName) {
  throw new Error('❌ Missing MongoDB Name in environment variables.');
}

const client = new MongoClient(uri);


const connectDB = async () => {
  if (db) {
    return db;
  }
  try {
    await client.connect();
    db = client.db(dbName);
    console.log('✅ MongoDB connected');
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error;
  }
}
export default connectDB;
 