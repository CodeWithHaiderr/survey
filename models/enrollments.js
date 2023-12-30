const { Model } = require('objection');

class Enrollment extends Model{
    static get tableName(){
        return 'enrollments';
    }
    static get idColumn(){
        return 'enrollment_id';
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['student_id', 'course_id'],
            properties: {
                enrollment_id: { type: 'integer' },
                student_id: { type: 'integer' },
                course_id: { type: 'integer' },
                enrollment_date: { type: 'string', format: 'date' },
            },
        };
    }
    static get relationMappings(){
        return{
            student: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('../models/students'),
                join: {
                    from: 'enrollments.student_id',
                    to: 'students.student_id'
                },
            },
            course: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('../models/courses'),
                join: {
                    from: 'enrollments.course_id',
                    to: 'courses.course_id',
                },
            },

        };
    }
}
module.exports = Enrollment;