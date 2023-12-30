/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('family', function(table){
    table.increments('family_id').primary();
    table.integer('employee_id').unsigned().references('employee_id').inTable('employees');
    table.integer('num_of_members');
    table.decimal('total_income');
    table.integer('poverty_score');
    table.decimal('total_expense');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('family');
};
