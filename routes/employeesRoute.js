const Router = require('koa-router');
const { empLogin, empData} = require('../controllers/employeeController');

const router = new Router();

router.post('/empLogin', empLogin);
router.get('/empData', empData);

module.exports = router;