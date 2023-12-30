const Router = require('koa-router');
const MemberController = require('../controllers/membersController');

const router = new Router();

router.post('/addMember',MemberController.addMember);
router.get('/getMember',MemberController.getMembers);
module.exports = router;