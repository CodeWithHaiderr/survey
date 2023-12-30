const Router = require('koa-router');
const CourseController = require('../controllers/courseController');

const router = new Router();

router.get('/getCourses',CourseController.getCourse);
router.post('/addCourse', CourseController.addCourse);
router.put('/updateCourse/:id',CourseController.updateCourse);

module.exports = router;