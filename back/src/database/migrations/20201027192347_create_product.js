
exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable();
    table.decimal('preco', 2, 2).unique().notNullable();
    table.integer('quantidade').unique().notNullable();
    table.decimal('preco_unitario', 2, 2).unique().notNullable();
    table.string('fornecedor');
    table.decimal('preco_custo', 2, 2);
})

exports.down = knex => knex.schema.dropTable('products');
