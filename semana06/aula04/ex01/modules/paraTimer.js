import { intervalo } from './iniciaTimer.js';
import {
    botaoIniciar,
    cincoMinutosBotao,
    dezMinutosBotao,
    quinzeMinutosBotao,
    tempo
} from './seletores.js';

const paraTimer = () => {
    botaoIniciar.disabled = false;
    clearInterval(intervalo);

    tempo.textContent = '05:00';

    dezMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');

    cincoMinutosBotao.classList.add('selecionado');

    cincoMinutosBotao.disabled = false;
    dezMinutosBotao.disabled = false;
    quinzeMinutosBotao.disabled = false;
};

export default paraTimer;
