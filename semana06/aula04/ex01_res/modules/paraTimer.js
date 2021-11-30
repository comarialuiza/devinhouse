import { intervalo } from './iniciaTimer.js';
import { cincoMinutosString } from './minutos.js';
import { botaoIniciar, cincoMinutosBotao, dezMinutosBotao, quinzeMinutosBotao, tempo } from './seletores.js';

const paraTimer = () => {
    botaoIniciar.disabled = false;
    cincoMinutosBotao.disabled = false;
    dezMinutosBotao.disabled = false;
    quinzeMinutosBotao.disabled = false;

    clearInterval(intervalo);

    tempo.textContent = cincoMinutosString;

    dezMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');

    cincoMinutosBotao.classList.add('selecionado');
}

export default paraTimer;
