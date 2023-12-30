const Router = require('koa-router');
const EnrollmentConroller = require('../controllers/enrollmentController');

const router = new Router();

router.get('/getEnrollments',EnrollmentConroller.getEnrollment);
router.post('/addEnrollment',EnrollmentConroller.addEnrollment);
router.put('/updateEnrollment/:id',EnrollmentConroller.updateEnrollment);

module.exports = router;