const { Model } = require('objection');

class Family extends Model {
    static get tableName() {
        return 'family';
    }
    static get idColumn() {
        return 'family_id';
    }
    static get jsonSchema(){
        return{
            type: 'object',
            required: ['num_of_members', 'employee_id', 'total_income', 'poverty_score', 'total_expense'],
            properties: {
                family_id: {type: 'integer'},
                employee_id: { type: 'integer' },
                num_of_members: { type: 'integer' },
                total_income: {type: 'number'},
                poverty_score: {type: 'integer'},
                total_expense: {type: 'number'},
            },
        };            
    }
    static get relationMappings(){
        return {
            employees: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./employees'),
            join: {
                from: 'family.employee_id',
                to: 'employees.employee_id',
            },
        },
        members: {
            relation: Model.HasManyRelation,
            modelClass: require('./members'),
            join: {
                from: 'family.member_id',
                to: 'members.member_id'
            },
        }

            
        }
    }
}
module.exports = Family;