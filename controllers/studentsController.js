const Students = require('../models/students');

class StudentController{
    static async addStudent(ctx) {
        try{
            const {
                stu_first_name,
                stu_last_name,
                stu_date_of_birth,
                stu_address,
                stu_email,
                //institution_id,
                stu_enrollment_date,
                academic_history,
                attendance_record,
                extracurricular_activities,
            } = ctx.request.body;

            const newStudent = await Students.query().insert({
                stu_first_name,
                stu_last_name,
                stu_date_of_birth,
                stu_address,
                stu_email,
                //institution_id,
                stu_enrollment_date,
                academic_history,
                attendance_record,
                extracurricular_activities,
            });
            ctx.body = newStudent;
        } catch (error){
            console.error('Error adding student:',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async getStudents(ctx) {
        try {
            const students = await Students.query();
            ctx.status = 200;
            ctx.body = students;
        } catch (error) {
            console.error('Error fetching students:',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async updateStudent(ctx) {
        try{
            const studentId = ctx.params.id;
            const updateData = ctx.request.body;

            const updateStudent = await Students.query().patchAndFetchById(studentId, updateData);
            ctx.body = updateStudent;
        } catch (error) {
            console.error('Error updating student',error);
            ctx.status = 500;
            ctx.body = { error: 'Internal server error'};
        }
    }
}
module.exports = StudentController;