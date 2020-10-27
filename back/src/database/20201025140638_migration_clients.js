
exports.up = function(knex) {
  return knex.schema.createTable('client', table => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.data('aniversario');
    table.string('phone').notNullable();
    table.string('phone');
    table.string('endereco').notNullable();
    table.string('email');

    table.integer('compras_id').notNullable();
    table.foreign('compras_id').reference('id_compra').inTable('compras');
    
    table.integer('parcelas_id').notNullable();
    table.foreign('parcelas_id').reference('id').inTable('compras');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('client');
};
