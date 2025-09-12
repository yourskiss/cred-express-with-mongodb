import { Router } from "express";
const router = Router();
import { 
    StudentFormShow, StudentFormSubmit, 
    ShowAllStudent, FilerStudent, paginationStudent,
    ShowStudentByName, ShowStudentById,
    DeleteStudentById,  
    EditStudentFormShow, EditStudentFormSubmit
} from '../controllers/studentController.js';


router.get('/student-add', StudentFormShow);
router.post('/student-form-submit', StudentFormSubmit);  

router.get('/students', ShowAllStudent);
router.get('/', ShowAllStudent);
router.get('/student-filter', FilerStudent);
router.get('/student-pagination', paginationStudent);



router.get('/student-view/:fullname', ShowStudentByName);
router.get('/student-detail/:id', ShowStudentById);

router.get('/student-delete/:id', DeleteStudentById);

router.get('/student-edit/:id', EditStudentFormShow);
router.post('/student-edit-submit/:id', EditStudentFormSubmit);

export const studentRoute = router;

 