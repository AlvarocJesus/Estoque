
exports.up = function(knex) {
  knex.schema.createTable('products', table => {
      table.increments('id');
      table.string('name');
      table.decimal('price');
      table.integer('amount');
  })
};

exports.down = function(knex) {
  
};
