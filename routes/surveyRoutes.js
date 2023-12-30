const Router = require('koa-router');
const SurveyController = require('../controllers/surveyController');

const router = new Router();

router.get('/getSurveys',SurveyController.getSurveys);
router.post('/addSurvey',SurveyController.addSurvey);
router.put('/updateSurvey/:id',SurveyController.updateSurvey);

module.exports = router;