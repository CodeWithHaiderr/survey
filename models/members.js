const { Model } = require('objection');

class Members extends Model {
    static get tableName(){

        
        return 'members';
    }
    static get idColumn(){
        return 'member_id'
    }
    static get jsonSchema(){
        return{
            type: 'object',
            required: ['family_id', 'member_name', 'member_age', 'member_gender', 'head_of_house', 'isStudent'],
            properties: {
                member_id: {type: 'integer'},
                family_id: {type: 'integer'},
                member_name: {type: 'string'},
                member_age: {type: 'integer'},
                member_gender: {type: 'string', enum: ['Male','Female','Other']},
                head_of_house: {type: 'boolean'},
                member_income: {type: 'number'},
                member_expenses: {type: 'number'},
                isStudent: {type: 'boolean'},
                student_id: {type: 'integer'},
                course: {type: 'string'},
                annual_fee: {type: 'number'},
                remaining_fee: {type: 'number'},
                current_class: {type: 'string'},

            },
        };
    }
    static get relationMappings(){
        return{ 
            family: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./family'),
                join: {
                    from: 'member.family_id',
                    to: 'family.family_id',
                },
            },
            student: {
                relation: Model.BelongsToOneRelation,
                modelClass: require('./students'),
                join: {
                    from: 'member.student_id',
                    to: 'students.student_id',
                },
            },
        }
    }
}

module.exports = Members;