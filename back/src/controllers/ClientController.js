const connection = require('../database/connection');

export default {
    async index(req, res){
        const clients = await connection('client')
        .join('compras', 'compras_id', '=', 'compras.compras_id')
        .join('parcelas', 'parcelas_id', '=', 'parcelas.parcelas_id')
        .select([
            'compras.*',
            'parcelas.*',
            'clients.name',
            'clients.aniversario',
            'clients.tel',
            'clients.phone',
            'clients.endereco',
            'clients.email'

        ]);

        return res.json(clients);
    },

    async create(req, res) {
        const client = req.body;
        const compras_id = req.headers.authorization;

        const [id] = await connection('client').insert({
            name,
            aniversario,
            phone,
            phone,
            endereco,
            email
        });

        return res.json(client); //colocar res.json({ id })
    }
}