const { Model } = require('objection');
const Surveys = require('../models/surveys');

class SurveyController {
    static async addSurvey(ctx){
        try{
            const { student_id, survey_date,
                poverty_score, survey_questions,
                survey_methodology, surveyor_information } = ctx.request.body;

            const addNewSurvey = await Surveys.query().insert({
                student_id, survey_date,
                poverty_score, survey_questions,
                survey_methodology, surveyor_information
            });

            ctx.status =200;
            ctx.body = addNewSurvey;
        } catch(error) {
            console.error('Error adding survey',error);
            ctx.status = 500;
            ctx.error = {error: 'Internal server error'};
        }
    }
    static async getSurveys(ctx){
        try{
            const surveys = await Surveys.query();
            ctx.status = 200;
            ctx.body = surveys;
        } catch(error) {
            console.error('Error fetching surveys',error);
            ctx.status = 500;
            ctx.body = {error:'Interrnal server error'};
        }
    } 
    static async updateSurvey(ctx){
        try{
            const surveyId = ctx.params.id;
            const updateData = ctx.request.body;

            const updateNewSurvey = await Surveys.query().patchAndFetchById(surveyId, updateData);
            ctx.body = updateNewSurvey;
        } catch(error) {
            console.error('Error updating survey');
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    } 
}

module.exports = SurveyController;