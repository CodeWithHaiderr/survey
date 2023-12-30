


exports.up = function(knex) {
  return knex.schema.createTable('employees',function (table) {
    table.increments('employee_id').primary();
    table.string('employee_name').notNullable();
    table.string('employee_username').notNullable();
    table.string('role').notNullable();
    table.string('employee_password').notNullable();
    table.string('employee_area').notNullable();
    table.integer('no_of_surveys').defaultTo(0);
    table.string('token');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('employees');  
};
