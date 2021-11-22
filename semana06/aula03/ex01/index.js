import { nome } from './app.js';

document.getElementById("nomeusuario").innerHTML = nome ? nome : "desconhecido";
document.getElementById("saudacao").addEventListener("click", digaOla);