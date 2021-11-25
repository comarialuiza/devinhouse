import {
    tempo,
    cincoMinutosBotao,
    dezMinutosBotao,
    quinzeMinutosBotao
} from './seletores.js';
import { intervalo } from './iniciaTimer.js';

const paraTimer = () => {
    clearInterval(intervalo);

    tempo.innerHTML = '05:00';

    cincoMinutosBotao.disabled = false;
    dezMinutosBotao.disabled = false;
    quinzeMinutosBotao.disabled = false;
};

export default paraTimer;
