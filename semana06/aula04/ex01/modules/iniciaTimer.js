import { duracao } from '../index.js';
import {
    botaoIniciar,
    cincoMinutosBotao,
    dezMinutosBotao,
    quinzeMinutosBotao,
    tempo
} from './seletores.js';
import paraTimer from './paraTimer.js';

export let intervalo;

const iniciaTimer = () => {
    botaoIniciar.disabled = true;

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
            timer = duracao;
        }

        if (timer === 0) {
            paraTimer();
        }
    }, 1000);

    cincoMinutosBotao.disabled = true;
    dezMinutosBotao.disabled = true;
    quinzeMinutosBotao.disabled = true;
};

export default iniciaTimer;
