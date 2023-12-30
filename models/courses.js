const { Model } = require('objection');

class Courses extends Model {
    static get tableName() {
        return 'courses';
    }
    static get idColumn(){
        return 'course_id';
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['course_name'],
            properties: {
                course_id: { type: 'integer' },
                course_name: { type: 'string' },
                course_desc: { type: 'string' },
            },
        };
    }
}
module.exports = Courses;