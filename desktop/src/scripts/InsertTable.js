import api from './api';

api.get('/')
    .then((res) => {
        const products = res.data;
    })
    .catch((err) => console.log(`Erro ${err}`))
