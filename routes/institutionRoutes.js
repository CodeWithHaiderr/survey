const Router = require('koa-router');
const InstitutionController = require('../controllers/institutionController');

const router = new Router();

router.get('/getInstitute', InstitutionController.getInstitution);
router.post('/addInstitute', InstitutionController.addInstitution);
router.put('/updateInstitute/:id', InstitutionController.updateInstitute);

module.exports = router;