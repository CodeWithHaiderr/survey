const { Model } = require('objection');

class Institutions extends Model {
    static get tableName(){
        return 'institutions';
    } 
    static get idColumn() {
        return 'institution_id';
    }
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['institution_name','institution_type','institution_location'],
            properties: {
                institution_id : { type : 'integer' },
                institution_name : { type: 'string' },
                institution_type : { type : 'string' },
                institution_location: { type : 'string' },
            },
        };        
    }
    static get relationMappings(){
        return {
            students: {
                relation: Model.HasManyRelation,
                modelClass: require('./students'),
                join: {
                    from: 'institutions.institution_id',
                    to: 'students.institution_id',
                },
            },
        };
    }
}
module.exports = Institutions;