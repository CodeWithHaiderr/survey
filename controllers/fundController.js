const Funds = require('../models/funds');

class FundsController {
    static async addFund(ctx) {
        try{
            const { student_id, fund_amount, 
                fund_grant_date, fund_utilization_plan, 
                follow_up_surveys} = ctx.request.body;
            
            const newFund = await Funds.query().insert({
                student_id, fund_amount, 
                fund_grant_date, fund_utilization_plan, 
                follow_up_surveys
            });
            ctx.status = 200;
            ctx.body = newFund;
        } catch(error) {
            console.error('Error adding fund',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    
    static async getFunds(ctx) {
        try {
            
            const funds = await Funds.query();
            ctx.status = 200;
            ctx.body = funds;

        } catch (error) {
            console.error('Error fetching funds',error);
            ctx.status = 500;
            ctx.body = {error:'Internal server error'};
        }
    }
    static async updateFunds(ctx) {
        try {
            const fundId = ctx.params.id;
            const updateData = ctx.request.body;

            const updatedFund = await Funds.query().patchAndFetchById(fundId,updateData);
            ctx.status=200;
            ctx.body = updatedFund;
        } catch (error) {
            console.error('Internal server error',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
}
module.exports = FundsController;