const { Model } = require('objection');

class Funds extends Model {
    static get tableName(){
        return 'funds';
    }
    static get idColumn(){
        return 'fund_id';
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['student_id', 'fund_amount', 'fund_grant_date'],
            properties: {
                fund_id: { type:'integer' },
                student_id: { type: 'integer' },
                fund_amount: { type: 'number' },
                fund_grant_date: { type: 'string', format: 'date'},
                fund_utilization_plan: {type: 'string'},
                follow_up_surveys: {type: 'boolean'},
            },
        };
    }
    static get relationMappings() {
        return{
            students: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./students'),
                join: {
                    from: 'funds.student_id',
                    to: 'student.student_id'
                },
            },
        };
    }
}

module.exports = Funds;