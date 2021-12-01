const personagem = {
    nome: "Samwise Gamgee",
    nascimento: "2983 da Terceira Era do Sol",
    familia: {
        esposa: "Rosinha Villa",
        melhorAmigo: "Frodo Baggins"
    }
};

const historiaDoPersonagem = ({ nome, familia: { esposa, melhorAmigo } }) => {
    return `Meu nome é ${ nome } e sou casado com ${ esposa }. Gosto de ir em aventuras com meu melhor amigo ${ melhorAmigo } 😍.`;
}

console.log(historiaDoPersonagem(personagem));