/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('funds', function(table) {
    table.increments('fund_id').primary();
    table.integer('student_id').unsigned().references('student_id').inTable('students');
    table.decimal('fund_amount').notNullable();
    table.date('fund_grant_date').notNullable();
    table.text('fund_utilization_plan');
    table.boolean('follow_up_surveys').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('funds');
};
