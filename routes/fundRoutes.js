const Router = require('koa-router');
const  FundsController = require('../controllers/fundController');

const router = new Router();

router.get('/getFunds', FundsController.getFunds);
router.post('/postFund', FundsController.addFund);
router.put('/updateFund/:id', FundsController.updateFunds);

module.exports = router;