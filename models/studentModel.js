import connectDB from "../config/db.js";
 
const collection_student = process.env.COL_STUDENT
if (!collection_student) {
  throw new Error('❌ Environment variable COL_STUDENT is not defined');
}

export async function addStudent(data) {
  const db = await connectDB();
  return await db.collection(collection_student).insertOne(data);;
}

export async function getAllStudent() {
  const db = await connectDB();
  return await db.collection(collection_student).find({}).toArray();
}

export async function findStudentByName(name) {
  const db = await connectDB();
  return await db.collection(collection_student).findOne({ fullname : name });
}
