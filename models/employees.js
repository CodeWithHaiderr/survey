

const { Model } = require('objection');

class Employees extends Model {
    static get tableName(){
        return 'employees';
    }
    static get idColumn() {
        return 'employee_id'; // Specify the actual primary key column name
    }
    static get jsonSchema(){
        return{
            type: 'object',
            required: ['employee_username','employee_password'],
            properties: {
                employee_id: { type: 'integer' },
                employee_name : { type: 'string' },
                employee_username : { type: 'string' },
                employee_password : { type: 'string' },
                employee_area : {type: 'string'},
                no_of_surveys: {type: 'integer'},
                token: {type: 'string'},
            },
        };
    }
    static get relationMappings() {
        return {
            familyMembers: {
                relation: Model.HasManyRelation,
                modelClass: require('./family_members'),
                join:{
                    from: 'employee.employee_id',
                    to: 'family_members.employee_id',
                },
            },
        };
    }
}
module.exports = Employees;