/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('enrollments',function(table){
    table.increments('enrollment_id').primary();
    table.integer('student_id').unsigned().references('student_id').inTable('students');
    table.integer('course_id').unsigned().references('course_id').inTable('courses');
    table.date('enrollment_date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('enrollments');
};
