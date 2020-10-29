
exports.up = function(knex) {
    return knex.schema.createTable('parcelas', table => {
        table.increments('id');
        table.string('quantidade_parcelas').notNullable();
        table.data('data_vencimento').notNullable();
        table.decimal('value_parcela', 2, 2).notNullable();
        table.data('pay_day').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('parcelas');
};
