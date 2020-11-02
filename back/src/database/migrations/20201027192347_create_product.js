
exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable();
    table.decimal('preco').notNullable();
    table.integer('quantidade').notNullable();
    table.decimal('precoUnitario').notNullable();
    table.string('fornecedor');
    table.decimal('precoCusto');
})

exports.down = knex => knex.schema.dropTable('products');
