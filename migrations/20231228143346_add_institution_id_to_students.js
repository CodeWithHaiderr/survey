/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasColumn('students', 'institution_id').then((exists) => {
      if (!exists) {
        return knex.schema.alterTable('students', function (table) {
          table.integer('institution_id').unsigned().references('institution_id').inTable('institutions');
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.table('students', function(table){
      table.dropColumn('institution_id');
    });
  };