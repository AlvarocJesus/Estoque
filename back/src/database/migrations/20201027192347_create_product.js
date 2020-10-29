
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('name').notNullable();
        table.decimal('price', 2, 2).notNullable();
        table.integer('amount').notNullable();
        table.decimal('unit_price', 2, 2).notNullable();
        table.string('supplier_name');
        table.decimal('price_cost', 2, 2);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
