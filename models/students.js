const { Model } = require('objection');

class Students extends Model {
    static get tableName() {
        return 'students';
    }
    static get idColumn() {
        return 'student_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['stu_first_name', 'stu_last_name'],
            properties: {
                student_id: { type: 'integer' },
                stu_first_name: { type: 'string' },
                stu_last_name: { type: 'string' },
                stu_date_of_birth: { type: 'string', format: 'date' },
                stu_address: { type: 'string' },
                stu_email: { type: 'string' },
                institution_id: { type: 'integer' },
                stu_enrollment_date: { type: 'string', format: 'date' },
                academic_history: { type: 'string' },
                attendance_record: { type: 'string' },
                extracurricular_activities: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            familyMembers: {
                relation: Model.HasManyRelation,
                modelClass: require('../models/family_members'),
                join: {
                    from: 'students.student_id',
                    to: 'family_members.student_id',
                },
            },
            institution: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('../models/institutions'),
                join: {
                    from: 'students.institution_id',
                    to: 'institutions.institution_id',
                }
            }
        }
    }
}

module.exports = Students;