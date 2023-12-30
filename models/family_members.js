

const { Model } = require('objection');

class FamilyMembers extends Model {
    static get tableName() {
        return 'family_members';
    }

    static get idColumn() {
        return 'member_id';
      }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['employee_id', 'fm_first_name', 'fm_last_name'],
            properties: {
                member_id: { type: 'integer' },
                employee_id: { type: 'integer' },
             //   student_id: { type: 'integer' },
                fm_first_name: { type: 'string' },
                fm_last_name: { type: 'string' },
                fm_date_of_birth: { type: 'string', format: 'date' },
                relationship: { type: 'string' },
                occupation: { type: 'string' },
                income: { type: ['integer', 'null'] },
                health_conditions: { type: 'string' },
                other_details: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            employee: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./employees'),
                join: {
                    from: 'family_members.employee_id',
                    to: 'employees.employee_id',
                },
            },
             student: {
                 relation: Model.BelongsToOneRelation,
                 modelClass: require('./students'),
                 join: {
                     from: 'family_member.student_id',
                     to: 'students.student_id',
                 },
             },
        };
    }
}
module.exports = FamilyMembers; 