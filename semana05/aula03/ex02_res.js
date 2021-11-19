class Person {
    constructor(name, yearBirth) {
        this.name = name;
        this.yearBirth = yearBirth;
    }

    calculateAge() {
        return 2021 - this.yearBirth;
    }
}

class Programmer extends Person {
    constructor(name, yearBirth, language) {
        super(name, yearBirth);
        this.language = language;
    }

    greet() {
        return `My name is ${ this.name } and I program in ${ language }!`;
    }
}