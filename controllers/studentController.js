 import { ObjectId } from 'mongodb';
import { addNewStudent, getAllStudent, findStudentByName, deleteStudentById, findStudentById, updateStudentById } from "../models/studentModel.js";




// show all student  
export const ShowAllStudent = async (req, res) => {
    const studentList = await getAllStudent();
    if (!studentList) {
      return res.status(404).send('List ==> Student  not found');
    }
    res.render('studentList', { studentList });
}
 



// show student by name
export const ShowStudentByName = async (req, res) => {
  const stuName = req.params.fullname.replace(/-/g, ' ');
  const student = await findStudentByName(new RegExp(`^${stuName}$`, 'i'));

  if (!student) {
    return res.status(404).send('View ==> Student not found');
  }
  res.render('studentView', { student });
}





// show student by id
export const ShowStudentById = async (req, res) => {
  const {id} = req.params;
  if (!ObjectId.isValid(id)) {
      return res.status(400).send('Detail ==> Invalid student ID');
  }
  const student = await findStudentById(id);
  if (!student) {
      return res.status(404).send('Detail ==> Student not found');
  }
  res.render('studentDetail', { student });
};





// show add student form
export const StudentFormShow = (req, res) => {
  res.render('studentAdd');
};




// submit add student form
export const StudentFormSubmit = async (req, res) => {
  try {
    const { fullname, email, mobile } = req.body;
    if (!fullname || !email || !mobile ) {
      return res.status(400).send('All fields are required');
    }
    const student = { fullname, email, mobile } 
    const result = await addNewStudent(student);
    if (!result.insertedId) return res.status(500).send('Error❌ : Insertion failed');
    // res.render('studentSuccess', { student });
    //res.send('success');
    res.redirect("/students")
  } catch (error) {
     if (error.message.includes('exists') || error.code === 11000) {
      return res.status(400).send('Error❌ : Email or mobile already exists');
    }
    res.status(500).send('Error❌ : ' + error.message);
  }
};






// delete student by id
export const DeleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send('Delete ==> Invalid student ID');
    }
    const result = await deleteStudentById(id);
    if (!result) {
      return res.status(404).send('Delete ==> Student not found');
    }
    res.redirect('/students'); // or send a success message
  } catch (error) {
    res.status(500).send('❌ Error: ' + error.message);
  }
};


 

 

// edit student by id
export const EditStudentFormShow = async (req, res) => {
  const {id} = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Edit ==> Invalid student ID');
  }
  const student = await findStudentById(id);
  if (!student) {
    return res.status(404).send('Edit ==> Student not found');
  }
 
  res.render('studentEdit', { student });
};

// update student by id
export const EditStudentFormSubmit = async (req, res) => {
  const {id} = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Edit Submit ==> Invalid student ID');
  }
  const existingStudent = await findStudentById(id);
  if (!existingStudent) {
    return res.status(404).send('Edit Submit ==> Student not found');
  }

  const updatedData = {
    fullname: req.body.fullname || existingStudent.fullname,
    email: req.body.email === existingStudent.email || !req.body.email ? existingStudent.email : req.body.email,
    mobile: req.body.mobile === existingStudent.mobile || !req.body.mobile ? existingStudent.mobile : req.body.mobile,
  };

  const result = await updateStudentById(id, updatedData);

  if (result.modifiedCount === 0) {
    return res.status(400).send('Update failed or no changes made.');
  }

  res.redirect(`/student-detail/${id}`);
};