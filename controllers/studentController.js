 
import { addStudent, getAllStudent, findStudentByName } from "../models/studentModel.js";



export const ShowAllStudent = async (req, res) => {
    const studentList = await getAllStudent();
    if (studentList.length === 0) return res.status(404).send('Student not found');
    res.render('studentList', { studentList });
}
 

export const ShowStudentByName = async (req, res) => {
    let stu = req.params.fullname
    console.log(stu);
    const student = await findStudentByName(stu);
    if (!student) return res.status(404).send('Student not found');
    res.render('studentView', { student });
}



export const AddStudentForm = (req, res) => {
  res.render('studentAdd');
};

export const handleStudentSubmit = async (req, res) => {
  try {
    const { fullname, email, mobile } = req.body;
    if (!fullname || !email || !mobile ) {
      return res.status(400).send('All fields are required');
    }
    const student = { fullname, email, mobile } 
    const result = await addStudent(student);
    if (!result.insertedId) return res.status(500).send('Insertion failed');
    // res.render('studentSuccess', { student });
    //res.send('success');

    res.redirect("/students")
  } catch (error) {
    res.status(500).send('❌ Error: ' + error.message);
  }
};