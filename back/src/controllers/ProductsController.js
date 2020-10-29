const connection = require('../database/connection');

module.exports = {
    index(req, res) {
        const products = connection('products').select([
            'products.name',
            'products.price',
            'products.table',
            'products.unit_price',
            'products.supplier_name',
            'products.price_cost'
        ]);

        return res.json(products);

    },

    create(req, res) {
        const data = req.body;

        return res.json(data);
    },

    // put(req, res){

    // }
}