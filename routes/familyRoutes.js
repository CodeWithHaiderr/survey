const Router = require('koa-router');
const FamilyController = require('../controllers/familyController');

const router = new Router();

router.get('/getFamilies', FamilyController.getFamilies);
router.post('/addFamily',FamilyController.addFamily);
router.put('updateFamily/:id',FamilyController.updateFamily);

module.exports = router;