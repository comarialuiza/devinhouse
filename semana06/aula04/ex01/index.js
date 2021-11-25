import {
    botaoIniciar,
    botaoParar,
    tempo,
    cincoMinutosBotao,
    dezMinutosBotao,
    quinzeMinutosBotao
} from './modules/seletores.js';
import {
    cincoMinutos,
    dezMinutos,
    quinzeMinutos,
    cincoMinutosString,
    dezMinutosString,
    quinzeMinutosString
} from './modules/minutos.js';
import paraTimer from './modules/paraTimer.js';
import iniciaTimer from './modules/iniciaTimer.js';

cincoMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = cincoMinutosString;
    duracao = cincoMinutos;

    dezMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');

    cincoMinutosBotao.classList.add('selecionado');
});

dezMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = dezMinutosString;
    duracao = dezMinutos;

    cincoMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');
    
    dezMinutosBotao.classList.add('selecionado');
});

quinzeMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = quinzeMinutosString;
    duracao = quinzeMinutos;

    cincoMinutosBotao.classList.remove('selecionado');
    dezMinutosBotao.classList.remove('selecionado');

    quinzeMinutosBotao.classList.add('selecionado');
});

botaoIniciar.addEventListener('click', iniciaTimer); 
botaoParar.addEventListener('click', paraTimer);
