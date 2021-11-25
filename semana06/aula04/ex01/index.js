const cincoMinutos = 60 * 5;
const dezMinutos = 60 * 10;
const quinzeMinutos = 60 * 15;

let duracao = cincoMinutos;
const botaoIniciar = document.querySelector("#iniciar");
const botaoParar = document.querySelector("#parar");
const tempo = document.querySelector("#tempo");

const cincoMinutosBotao = document.querySelector("#cincoMinutos");
const dezMinutosBotao = document.querySelector("#dezMinutos");
const quinzeMinutosBotao = document.querySelector("#quinzeMinutos");

cincoMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = '05:00';
    duracao = cincoMinutos;

    dezMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');

    cincoMinutosBotao.classList.add('selecionado');
});

dezMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = '10:00';
    duracao = dezMinutos;

    cincoMinutosBotao.classList.remove('selecionado');
    quinzeMinutosBotao.classList.remove('selecionado');
    
    dezMinutosBotao.classList.add('selecionado');
});

quinzeMinutosBotao.addEventListener('click', () => {
    tempo.innerHTML = '15:00';
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
