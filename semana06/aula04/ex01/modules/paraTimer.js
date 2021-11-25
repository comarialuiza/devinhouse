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

    cincoMinutosBotao.disabled = false;
    dezMinutosBotao.disabled = false;
    quinzeMinutosBotao.disabled = false;
};

export default paraTimer;
