import * as seletores from './seletores.js';

function alteraValor() {
    seletores.titulo.addEventListener('click', function() {
        titulo.innerHTML = 'Olá!';
    });
};

export default alteraValor;

