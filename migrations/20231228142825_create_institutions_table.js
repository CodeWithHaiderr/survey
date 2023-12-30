
exports.up = function(knex) {
   return knex.schema.createTable('institutions', function(table) {
       table.increments('institution_id').primary();
       table.string('institution_name').notNullable();
       table.string('institution_type').notNullable();
       table.string('institution_location').notNullable();
     });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('institutions');
};

