const [fruta1, fruta2, fruta3] = ["morango", "pêssego", "maçã"];

console.log(fruta1);

const { nome: nomeBilbo, personalidade: [, personalidade1] } = {
    nome: "Bilbo",
    sobrenome: "Baggins",
    personalidade: [
      "aventuroso",
      "altruista",
      "corajoso"
    ]
  };
  
  
  const frutas = ["pêssego", "tâmara"];
  const [fruta1, fruta2, fruta3 = "maçã"] = frutas;
  
  
  ///////
  
  
  const user = {
    nome: "Joaquim",
    idade: 34,
    interesses: ["back end", "cozinhar", "jogar video game", "ir na praia"],
    familia: {
      pai: "Stefano",
      mae: "Maria",
      irma: "Joaquina"
    }
  };
  
  const { nome, interesses: [,,interesse], familia: { irma } } = user;
  
  
  ///////////////////////
  
  const { estaLogado, ...resto } = {
    id: 1,
    nome: "Ben",
    estaLogado: false
  };
  
  
  const [um, dois, ...restoArray] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const arrayPar = restoArray.filter(num => num % 2 === 0);
  
  /////////////////////////
  
  const numerosFibonnaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584];
  
  let _outrosNumeros;
  
  const somaFibonnaci = (numeros) => {
    const [primeiro, segundo, ...outrosNumeros] = numeros;
    _outrosNumeros = outrosNumeros;
  };
  
  somaFibonnaci(numerosFibonnaci);
  
  
  const usuario = {
    nome: "Mika",
    nivel: "admin"
  };
  
  const novoUsuario = { ...usuario };
  usuario.idade = 34;
  
  console.log(usuario);
  console.log(novoUsuario);
  console.log(usuario === novoUsuario);
  
  
  const strings = ['oi', 'hello', 'world'];
  const novasStrings = [...strings];
  
  novasStrings.push('olá');
  
  console.log(strings);
  console.log(novasStrings);
  console.log(strings === novasStrings);
  
  
  const nums1 = [3, 6, 4, 2, 9, 8];
  const nums2 = [2, 7, 4, 10];
  
  const nums3 = [...nums1, ...nums2];
  
  console.log(nums3);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  