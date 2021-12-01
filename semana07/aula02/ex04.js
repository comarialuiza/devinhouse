const usuario = {
    nome: "Joana",
    sobrenome: "Carvalho",
    interesses: ["leitura", "jardinagem", "internet das coisas"],
    familia: {
        pai: "Claudio",
        mae: "Odete",
        irma: "Lorena"
    }
};

const historiaUsuario = ({ nome, sobrenome, interesses: [leitura], familia: { mae }}) => {
    return `Olá, meu nome é ${ nome } ${ sobrenome } e meu principal hobbie é ${ leitura }. O nome da minha mãe é ${ mae }.`
}

console.log(historiaUsuario(usuario));