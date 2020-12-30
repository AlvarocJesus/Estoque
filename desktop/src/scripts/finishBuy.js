// import api from '../service/api.js';
import linha2 from './InsertTable';

const table = document.getElementById('table');
const finishBuy = document.getElementById('finishBuy');

finishBuy.addEventListener('click', function(e){
    e.preventDefault();
    console.log(linha2.value);
    // api.put('')
    // .then()
    // .cathch()
})

table.appendChild(linha2);

