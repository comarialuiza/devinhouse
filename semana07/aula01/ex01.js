const paises = [{
    "name": "Afghanistan",
    "region": "Asia",
    "population": 38928341,
    "area": 652230.0
}, {
    "name": "Brazil",
    "region": "Americas",
    "population": 212559409,
    "area": 8515767.0
}, {
    "name": "China",
    "region": "Asia",
    "population": 1402112000,
    "area": 9640011.0
}, {
    "name": "Egypt",
    "region": "Africa",
    "population": 102334403,
    "area": 1002450.0
}, {
    "name": "Estonia",
    "region": "Europe",
    "population": 1331057,
    "area": 45227.0
}, {
    "name": "India",
    "region": "Asia",
    "population": 1380004385,
    "area": 3287590.0
}, {
    "name": "Malawi",
    "region": "Africa",
    "population": 19129955,
    "area": 118484.0
}, {
    "name": "Poland",
    "region": "Europe",
    "population": 37950802,
    "area": 312679.0
}, {
    "name": "Romania",
    "region": "Europe",
    "population": 19286123,
    "area": 238391.0
}];

// Obtenha apenas os países que possuem população maior que 100.000.000.
const populacaoGrande = paises.filter(pais => pais.population > 100000000);
// console.log('populacaoGrande', populacaoGrande);

// Obtenha um novo array que possui apenas o nome e a região de cada país.
const nomeRegiao = paises.map(pais => ({
    nome: pais.name,
    regiao: pais.region
}));

// console.log('nomeRegiao', nomeRegiao);

// Confira se todos os países se encontram na Europa.
const todosOsPaisesEstaoNaEuropa = paises.every(pais => pais.region === "Europe");
// console.log('todosOsPaisesEstaoNaEuropa', todosOsPaisesEstaoNaEuropa);


// Obtenha a média da população dos países da Europa.
// const paisesEuropa = paises
//     .filter(pais => pais.region === "Europe")
//     .map(pais => pais.population);

// const mediaPopulacaoEuropa = Math.floor(paisesEuropa.reduce((total, atual) => total + atual) / paisesEuropa.length);
// console.log('mediaPopulacaoEuropa', mediaPopulacaoEuropa);

//////////////

const europa = paises.filter(pais => pais.region === "Europe");
const populacaoEuropa = europa.map(pais => pais.population);
const somaPopulacaoEuropa = populacaoEuropa.reduce((total, atual) => total + atual);
const mediaPopulacaoEuropa = somaPopulacaoEuropa / populacaoEuropa.length;
const mediaArredondadaPopulacaoEuropa = Math.round(mediaPopulacaoEuropa);
// console.log('mediaArredondadaPopulacaoEuropa', mediaArredondadaPopulacaoEuropa);

// Encontre o primeiro país que se encontra na África.

const primeiroPaisAfrica = paises.find(pais => pais.region === "Africa");
// console.log('primeiroPaisAfrica', primeiroPaisAfrica);

// Obtenha uma lista de todos os países que se encontram na Ásia.
const asia = paises.filter(pais => pais.region === "Asia");
// console.log('asia', asia);

// Obtenha a soma da área de todos os países.
const somaArea = paises
    .map(pais => pais.area)
    .reduce((total, atual) => total + atual);

// console.log('somaArea', somaArea);