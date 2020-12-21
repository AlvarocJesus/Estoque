
exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').unique().notNullable();
    table.integer('preco').notNullable();
    table.integer('quantidade').notNullable();
    table.integer('precoUnitario').notNullable();
    table.string('fornecedor');
    table.integer('precoCusto');
})

exports.down = knex => knex.schema.dropTable('products');
