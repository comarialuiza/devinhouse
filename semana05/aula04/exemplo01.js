class Animal {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    talk() {
        return 'Eu não sei o que eu falo';
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    talk() {
        return 'Au au';
    }
}

const dog = new Dog('Lasagna', 'shih tzu');
console.log(dog.talk());

// class Vehicle {
//     #name
//     #year
//     #type
//     #km

//     constructor(name, year, type) {
//         this.#name = name;
//         this.#year = year;
//         this.#type = type;
//         this.#km = 10000;
//     }

//     calculateAge() {
//         return 2021 - this.#year;
//     }

//     get name() {
//         return this.#name;
//     }

//     get year() {
//         return this.#year;
//     }

//     get type() {
//         return this.#type;
//     }

//     get km() {
//         return this.#km;
//     }

//     set name(newName) {
//         this.#name = newName;
//     }

//     toJSON() {
//         return {
//             name: this.#name,
//             year: this.#year,
//             type: this.#type,
//             km: this.#km
//         }
//     }
// }

// const carro = new Vehicle('carro', 2015, 'carro');
// console.log(carro.toJSON());
// carro.year = 2020;
// console.log(carro.toJSON());
