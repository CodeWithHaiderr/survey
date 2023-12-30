/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('members', function(table){
    table.increments('member_id').primary();
    table.integer('family_id').unsigned().references('family_id').inTable('family');
    table.string('member_name');
    table.integer('member_age');
    table.string('member_gender');
    table.boolean('head_of_house');
    table.decimal('member_income');
    table.decimal('member_expenses');
    table.boolean('isStudent').defaultTo(false);
    table.integer('student_id').unsigned().references('student_id').inTable('students');
    table.string('course');
    table.decimal('annual_fee');
    table.decimal('remaining_fee');
    table.string('current_class');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('members');
};
