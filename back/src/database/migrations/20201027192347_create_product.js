
exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable();
    table.decimal('preco', 8, 2).notNullable();
    table.integer('quantidade').notNullable();
    table.decimal('precoUnitario', 8, 2).notNullable();
    table.string('fornecedor');
    table.decimal('precoCusto', 8, 2);
})

exports.down = knex => knex.schema.dropTable('products');
