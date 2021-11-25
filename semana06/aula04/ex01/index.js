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

let duracao = cincoMinutos;

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

let intervalo;

botaoIniciar.addEventListener('click', () => {
    let timer = duracao;
    let minutos = 0;
    let segundos = 0;

    intervalo = setInterval(() => {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        tempo.textContent = minutos + ":" + segundos;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

    cincoMinutosBotao.disabled = true;
    dezMinutosBotao.disabled = true;
    quinzeMinutosBotao.disabled = true;
}); 

botaoParar.addEventListener('click', () => {
    clearInterval(intervalo);

    tempo.innerHTML = '05:00';

    cincoMinutosBotao.disabled = false;
    dezMinutosBotao.disabled = false;
    quinzeMinutosBotao.disabled = false;
});
