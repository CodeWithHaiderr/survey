const { Model } = require('objection');

class Surveys extends Model {
    static get tableName(){
        return 'surveys';
    }
    static get idColumn(){
        return 'survey_id';
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['student_id', 'survey_date', 'poverty_score', 'survey_questions', 'survey_methodology', 'surveyor_information'],
            properties: {
                survey_id: {type: 'integer'},
                student_id: {type: 'integer'},
                survey_date: {type: 'string', format: 'date'},
                poverty_score: {type: 'integer'},
                survey_questions: {type: 'string'},
                survey_methodology: {type: 'string'},
                surveyor_information: {type: 'string'}
            },
        };
    }
    static get relationMappings(){
        return{
            students: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./students'),
                join: {
                    from: 'surveys.student_id',
                    to: 'students.student_id'
                },
            },
        };
    }
}

module.exports = Surveys;