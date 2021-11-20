class Person {
    #name
    #birthYear
    #age
    #interests

    constructor(name, birthYear, interests) {
        this.#name = name;
        this.#birthYear = birthYear;
        this.#age = new Date().getFullYear() - birthYear;
        this.#interests = interests;
    }

    get name() {
        return this.#name;
    }

    get birthYear() {
        return this.#birthYear;
    }

    get age() {
        return this.#age;
    }

    get interests() {
        return this.#interests;
    }
    
    sayHello() {
        return `Hello! My name is ${ this.#name } and I am interested in ${ this.#interests.join(', ') }.`
    }
    
    sayGoodbye() {
        return 'Goodbye!';
    }
}
  
class Teacher extends Person {
    #subject

    constructor(name, birthYear, interests, subject) {
        super(name, birthYear, interests);
        this.#subject = subject;
    }
    
    sayHello() {
        return `Hello! My name is ${ this.name } and I teach ${ this.#subject }.`;
    }
}
  
class Student extends Person {
    #grades
    #average

    constructor(name, birthYear, interests, grades) {
        super(name, birthYear, interests);
        this.#grades = grades;
    }
    
    calculateAverageGrade() {
        const averageGrade = Math.round((this.#grades.reduce((sum, curGrade) => sum + curGrade)) / this.#grades.length);

        this.#average = averageGrade;

        return averageGrade;
    }

    sayHello() {
        this.calculateAverageGrade();

        return `Hello! My name is ${ this.name } and my average grade ${ this.#average }.`;
    }
}
  
const student = new Student("Joana", 1985, ['reading', 'watching movies'], [9, 3, 10]);
// console.log(student.calculateAverageGrade());
// console.log(student.sayHello());
console.log(student.age);

// const teacher = new Teacher("Marcus", 1972, ['yoga', 'cooking', 'math'], 'math');
// console.log(teacher.sayHello());
