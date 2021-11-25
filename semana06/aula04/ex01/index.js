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

export let duracao = cincoMinutos;

cincoMinutosBotao.addEventListener('click', () => {
    tempo.textContent = cincoMinutosString;
    duracao = cincoMinutos;

    dezMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');

    cincoMinutosBotao.classList.add('selecionado');
});

dezMinutosBotao.addEventListener('click', () => {
    tempo.textContent = dezMinutosString;
    duracao = dezMinutos;

    cincoMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');
    
    dezMinutosBotao.classList.add('selecionado');
});

quinzeMinutosBotao.addEventListener('click', () => {
    tempo.textContent = quinzeMinutosString;
    duracao = quinzeMinutos;

    cincoMinutosBotao.classList.remove('selecionado');
    dezMinutosBotao.classList.remove('selecionado');

    quinzeMinutosBotao.classList.add('selecionado');
});

botaoIniciar.addEventListener('click', iniciaTimer); 
botaoParar.addEventListener('click', paraTimer);
