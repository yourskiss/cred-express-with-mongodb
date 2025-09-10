import { Router } from "express";
const router = Router();
import { AddStudentForm, handleStudentSubmit, ShowAllStudent, ShowStudentByName } from '../controllers/studentController.js';

router.post('/student-form', handleStudentSubmit);
router.get('/student-add', AddStudentForm);  
router.get('/students', ShowAllStudent);
router.get('/student/:fullname', ShowStudentByName);

export const studentRoute = router;