/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('family_members', function(table) {
    table.increments('member_id').primary();
    table.integer('employee_id').unsigned().references('employee_id').inTable('employees');
    table.integer('student_id').unsigned();
    table.foreign('students_id').references('student_id').inTable('students');
    table.string('fm_first_name').notNullable();
    table.string('fm_last_name').notNullable();
    table.date('fm_date_of_birth');
    table.string('relationship');
    table.string('occupation');
    table.integer('income');
    table.string('health_conditions');
    table.string('other_details');

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('family_members', function(table) {
    table.dropColumn('student_id');
  });
};
