
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('name').notNullable();
        table.decimal('preco', 2, 2).notNullable();
        table.integer('quantidade').notNullable();
        table.decimal('preco_unitario', 2, 2).notNullable();
        table.string('fornecedor');
        table.decimal('preco_custo', 2, 2);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
