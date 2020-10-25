
exports.up = function(knex) {
  knex.schema.createTable('client', table => {
    table.integer('id').increments().primary();
    table.string('name').notNullable();
    table.data('aniversario');
    table.string('phone');
    table.string('endereco')
    table.string('email')

    table. compras
    table.data('data_compra')
    table.string('product')
    table.decimal('value', 2, 2)
    table.string('quantidade_produtos')
    table.integer('total_value')

    table. parcelas
    table.string('quantidade_parcelas')
    table.data('data_vencimento')
    table.decimal('value_parcela', 2, 2)
    table.data('pay_day')
  })
};

exports.down = function(knex) {
  
};
