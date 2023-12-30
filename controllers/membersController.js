const Members = require('../models/members');

class MemberController {
    static async addMember(ctx) {
        console.log(ctx.request.body);
        try {
            const { member_id, family_id, member_name, member_age,
                member_gender, head_of_house, member_income, member_expenses,
                isStudent, student_id, course, annual_fee, remaining_fee,
                current_class
            } = ctx.request.body;

            const newMember = await Members.query().insert({
    
                family_id,
                member_name,
                member_age,
                member_gender,
                head_of_house,
                member_income,
                member_expenses,
                isStudent

            });
            ctx.status = 200;
            ctx.body = newMember;
        } catch (error) {
            console.error('Error adding family',error.message);
            ctx.status = 500;
            ctx.body = {error:'Internal server error'};
        }
    }  
    static async getMembers(ctx){

        try {
            const members = Members.query();
            ctx.status = 200;
            ctx.body = members;

        } catch (error) {
            console.error('Error fetcing families', error);
            ctx.status = 500;
            ctx.body = {error:'Internal server error'};
        }
    }
}
module.exports = MemberController;