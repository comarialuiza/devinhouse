class Animal {
    #name
    #yearOfBirth
    #fur

    constructor(name, yearOfBirth) {
        this.#name = name;
        this.#yearOfBirth = yearOfBirth;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get yearOfBirth() {
        return this.#yearOfBirth;
    }

    set fur(value) {
        this.#fur = value;
    }

    toJSON() {
        return {
            name: this.#name,
            yearOfBirth: this.#yearOfBirth,
            fur: this.#fur
        }
    }
}

// const cat = new Animal('Sushi', 2018);
// console.log(cat.toJSON());
// console.log(cat.yearOfBirth);
// cat.yearOfBirth = 2010;
// console.log(cat.yearOfBirth);
// console.log(cat.toJSON());




class Car {
    #model
    #year
    #price
    #km

    constructor(model, year, price, km) {
        this.#model = model;
        this.#year = year;
        this.#price = price;
        this.#km = km;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

    set km(value) {
        if (value > this.#km) {
            this.#km = value;
        }
    }

    toJSON() {
        return {
            model: this.#model,
            year: this.#year,
            price: this.#price,
            km: this.#km
        }
    }

    static sortByPrice(carArray) {
        const sortedCarsArray = carArray.sort((car1, car2) => {
            if (car1.price !== car2.price) return car1.price - car2.price;
        });

        return sortedCarsArray.map(arr => arr.toJSON());
    }
}

const onix = new Car('onix', 2012, 40000, 30000);
// console.log(onix.toJSON());

/* 1 ano depois... */
// onix.price = 20000;
// onix.km = 10000;
// console.log(onix.toJSON());

const ferrari = new Car('ferrari', 2018, 1480000, 10000);
const carroAleatorio = new Car('carro aleatório', 2021, 20000, 5000);

const carArray = [onix, carroAleatorio, ferrari];
// console.log(Car.sortByPrice(carArray));




