const users = [{
  "name": "Erica",
  "age": 19,
  "occupation": "student"
}, {
  "name": "Giovana",
  "age": 29,
  "occupation": "back end developer"
}, {
  "name": "Frank",
  "age": 13,
  "occupation": "make up artist"
}, {
  "name": "Henrique",
  "age": 26,
  "occupation": "engineer"
}];

const occupations = users.map(usuarioAtual => usuarioAtual.occupation);
const notStudents = users.filter(user => user.occupation !== "student");
const erica = users.find(user => user.name === "Erica");

const jobs = users
  .filter(user => user.occupation !== "student")
  .map(user => user.occupation);

console.log(jobs);

const allStudents = users.every((user, index) => {
  console.log(index);
  return user.age > 18;
});
console.log(allStudents);

const ages = [3, 19, 25, 40, 17];
const agesOverEighteen = ages.filter(age => age > 18);
const firstPersonOverEighteen = ages.find(age => age > 18);

const sumAges = ages.reduce((total, atual, currentIndex) => {
  return total + atual;
});

const avegerageAge = Math.ceil(sumAges / ages.length);

const everyoneIsOverEighteen = ages.every(age => age > 18);
