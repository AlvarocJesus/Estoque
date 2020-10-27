
exports.up = function(knex) {
    return knex.schema.createTable('compras', table => {
        table.increments('id_compra').notNullable();
        table.data('data_compra').notNullable();
        table.string('product').notNullable();
        table.decimal('value', 2, 2).notNullable();
        table.string('quantidade_produtos').notNullable();
        table.integer('total_value').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('compras');
};
