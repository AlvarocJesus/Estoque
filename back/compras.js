exports.up = function(knex) {
    return knex.schema.createTable('compras', table => {
        table.data('data_compra').notNullable();
        table.string('product').notNullable();
        table.decimal('value', 2, 2).notNullable();
        table.string('quantidade_produtos').notNullable();
        table.integer('total_value').notNullable();
  
      table. parcelas
        table.string('quantidade_parcelas').notNullable();
        table.data('data_vencimento').notNullable();
        table.decimal('value_parcela', 2, 2).notNullable();
        table.data('pay_day').notNullable();
      
      table.foreignKey
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('compras');
  };
  