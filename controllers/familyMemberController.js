const FamilyMembers = require('../models/family_members');

class FamilyMemberController {
    static async addFamilyMember(ctx) {
        
        try {
            const { employee_id, fm_first_name, fm_last_name,
                fm_date_of_birth, relationship, occupation, income, health_conditions,
                other_details } = ctx.request.body;

                const parsedIncome = parseInt(income,10);

                if(isNaN(parsedIncome) && income!== null){
                    ctx.status = 400;
                    ctx.body = {error: 'Income must be a valid integer'};
                    return;
                }

            const newFamilyMember = await FamilyMembers.query().insert({
                employee_id,
                fm_first_name, 
                fm_last_name, 
                fm_date_of_birth,
                relationship, 
                occupation, 
                income: isNaN(parsedIncome) ? null : parsedIncome, 
                health_conditions, 
                other_details
            });
            
            ctx.body = newFamilyMember;
        } catch (error) {
            console.error('Error adding family member:', error);
            ctx.status = 500;
            ctx.body = { error: 'Internal server error' };
        }
    }
    static async getFamilyMember(ctx) {
        try {
            const familyMember = await FamilyMembers.query();
            ctx.status = 200;
            ctx.body = familyMember;
        } catch (error) {
            console.error('Error fetching family member:', error);
            ctx.body = 500;
            ctx.body = { error: 'Internal server error' };
        }
    }
    static async updateFamilyMember(ctx) {
        try {
            const familyMemberId = ctx.params.id;
            const updateData = ctx.request.body;

            const updateFamilyMember = await FamilyMembers.query().patchAndFetchById(familyMemberId, updateData);
            ctx.status = 200;
            ctx.body = updateFamilyMember;
        } catch (error) {
            console.error('Error updating family member:', error);
            ctx.body = 500;
            ctx.body = { error: 'Internal server error' };
        }
    }
}

module.exports = FamilyMemberController;