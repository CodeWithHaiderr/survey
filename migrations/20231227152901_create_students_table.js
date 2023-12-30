/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table) {
    table.increments('student_id').primary();
    table.string('stu_first_name').notNullable();
    table.string('stu_last_name').notNullable();
    table.date('stu_date_of_birth');
    table.string('stu_address');
    table.string('stu_email');
    // table.integer('institution_id').references('institution_id').inTable('institutions');
    table.date('stu_enrollment_date');
    table.string('academic_history');
    table.string('attendance_record');
    table.string('extracurricular_activities');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
