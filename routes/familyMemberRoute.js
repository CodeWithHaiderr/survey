const Router = require('koa-router');
const FamilyMemberController = require('../controllers/familyMemberController');

const router = new Router();

router.get('/getFamilyMember', FamilyMemberController.getFamilyMember);
router.post('/addFamilyMember', FamilyMemberController.addFamilyMember);
router.put('/updateFamilyMember/:id', FamilyMemberController.updateFamilyMember);

module.exports = router;