const { Model } = require('objection');
const Enrollment = require('../models/enrollments');

class EnrollmentConroller {
    static async addEnrollment(ctx){
        try{
            const { student_id, course_id, enrollment_date} = ctx.request.body;

            const newEnrollment = await Enrollment.query().insert({
                student_id, course_id, enrollment_date,
            });
             ctx.status = 200;
             ctx.body = newEnrollment;
        } catch(error) {
            console.error("Error adding enrollment",error);
            ctx.body = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async getEnrollment(ctx) {
        try{
            const enrollments = await Enrollment.query();
            ctx.status = 200;
            ctx.body = enrollments;
        } catch (error) {
            console.error('Error fetching enrollment',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async updateEnrollment(ctx) {
        try{
            const enrollmentId = ctx.params.id;
            const updateData = ctx.request.body;

            const updatedEnrollment = await Enrollment.query().patchAndFetchById(enrollmentId,updateData);
            ctx.body= updatedEnrollment;
        } catch(error) {
            ctx.error('Internal updating enrollment',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
}

module.exports = EnrollmentConroller;