const Family = require('../models/family');

class FamilyController {
    static async addFamily(ctx){
        try {
            const { num_of_members, employee_id,
                total_income, poverty_score, total_expense
            } = ctx.request.body;

            const addNewFamily = await Family.query().insert({
                num_of_members, employee_id,
                total_income, poverty_score, total_expense
            });
            ctx.status= 200;
            ctx.body = addNewFamily;
        } catch (error) {
            console.error('Error adding family', error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }  
    }
    static async getFamilies(ctx) {
        try {
            
            const getAllFamilies = await Family.query();
            ctx.status = 200;
            ctx.body = getAllFamilies;
        } catch (error) {
            console.error('Error fetching data');
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async updateFamily(ctx) {
        try {
            const familyId = ctx.params.id;
            const data = ctx.request.body;

            const updateFamilyData = await Family.query().patchAndFetchById(familyId, data);
            ctx.status = 200;
            ctx.body = updateFamilyData;

        } catch (error) {
            console.error('Error updating data',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
}
module.exports = FamilyController;