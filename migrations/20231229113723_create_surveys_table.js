/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('surveys', function(table){
    table.increments('survey_id').primary();
    table.integer('student_id').unsigned().references('student_id').inTable('students');
    table.date('survey_date');
    table.integer('poverty_score');
    table.string('survey_questions');
    table.string('survey_methodology');
    table.string('surveyor_information');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('surveys');
};
