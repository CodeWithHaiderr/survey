const Router = require('koa-router');
const StudentController = require('../controllers/studentsController');

const router = new Router();

router.get('/getStudents', StudentController.getStudents);
router.post('/addStudent', StudentController.addStudent);
router.put('/updateStudent/:id',StudentController.updateStudent);

module.exports = router;