import connectDB from "../config/db.js";
 import { ObjectId } from 'mongodb';

const collection_student = process.env.COL_STUDENT
if (!collection_student) {
  throw new Error('Error❌ :  Environment variable COL_STUDENT is not defined');
}


// add new student
export async function addNewStudent(data) {
  const db = await connectDB();
  // Check for existing email or mobile
  const existing = await db.collection(collection_student).findOne({
    $or: [{ email: data.email }, { mobile: data.mobile }]
  });
  if (existing) {
    throw new Error('Error❌ :  Email or mobile already exists');
  }

  return await db.collection(collection_student).insertOne(data);;
}


// show all student
export async function getAllStudent() {
  const db = await connectDB();
  return await db.collection(collection_student).find({}).toArray();
}


// show student by name
export async function findStudentByName(name) {
  const db = await connectDB();
  return await db.collection(collection_student).findOne({ fullname : name });
}


// show student by id
export async function findStudentById(id) {
  const db = await connectDB();
  return await db.collection(collection_student).findOne({ _id: new ObjectId(id) });
}



// delete student by id
export async function deleteStudentById(id) {
  const db = await connectDB();
  return await db.collection(collection_student).deleteOne({ _id: new ObjectId(id) });
}



// update student by id
export async function updateStudentById(id, updatedData) {
  const db = await connectDB();

  return await db.collection(collection_student).updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
}

