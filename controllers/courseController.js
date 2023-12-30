const Course = require('../models/courses');

class CourseController {
    static async addCourse(ctx) {
        try{
            const {
                course_name, course_desc
            } = ctx.request.body; 
            const newCourse = await Course.query().insert({
                course_name, course_desc
            });
            ctx.status = 200;
            ctx.body = newCourse;
        } catch(error) {
            ctx.error('Error adding course',error)
            ctx.status = 500;
            ctx.body = { error: 'Internal server error'};
        }
    }
    static async getCourse(ctx){
        try{
            const courses = await Course.query();
            ctx.status = 200;
            ctx.body = courses;
        } catch(error) {
            ctx.error('Error fetching courses',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }
    static async updateCourse(ctx) {
        try{
            const courseId = ctx.params.id;
            const updateData = ctx.request.body;

            const updateNewCourse = await Course.query().patchAndFetchById(courseId,updateData);
            ctx.body = updateNewCourse;
        } catch (error) {
            console.error('Internal server error',error);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};

        }
    }
}
module.exports = CourseController;