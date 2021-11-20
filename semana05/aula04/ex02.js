class Person {
  #name;
  #birthYear;
  #interests;

  constructor(name, birthYear, interests) {
    this.name = name;
    this.birthYear = birthYear;
    this.age = new Date().getFullYear() - birthYear;
    this.interests = interests;
  }

  sayHello() {
    return `Hello! My name is ${
      this.name
    } and I am interested in ${this.interests.join(", ")}.`;
  }

  sayGoodbye() {
    return `Goodbye!`;
  }
  //  ============ set =============
  set name(valor) {
    this.#name = valor;
  }
  set birthYear(valor) {
    this.#birthYear = valor;
  }
  set interests(valor) {
    this.#interests = valor;
  }

  //  ============ get =============
  get name() {
    return this.#name;
  }
  get birthYear() {
    return this.#birthYear;
  }
  get interests() {
    return this.#interests;
  }
}

class Teacher extends Person {
  #subject;
  constructor(name, birthYear, interests, subject) {
    super(name, birthYear, interests);
    this.#subject = subject;
  }
  sayHello() {
    return `Hello! My name is ${this.name} i have ${
      this.age
    } years and I teach ${
      this.subject
    } and I am interested in ${this.interests.join(", ")}`;
  }
  set subject(valor) {
    this.#subject = valor;
  }
  get subject() {
    return this.#subject;
  }
}

class Student extends Person {
  #grades;
  constructor(name, birthYear, interests, grades) {
    super(name, birthYear, interests);
    this.#grades = grades;
  }

  calculateAverageGrade() {
    return Math.round(
      this.#grades.reduce((sum, curGrade) => sum + curGrade) /
        this.#grades.length
    );
  }
  sayHello() {
    return `Hello! My name is ${this.name}. My age is ${
      this.age
    } , and my average grade is ${this.calculateAverageGrade()}. I am interested in ${this.interests.join(
      ", "
    )}.`;
  }
  set grades(valor) {
    this.#grades = valor;
  }
  get grades() {
    return this.#grades;
  }
}

const student = new Student(
  "Joana",
  1985,
  ["reading", "watching movies"],
  [9, 3, 10]
);
// console.log(student.calculateAverageGrade());
console.log(student.sayHello());

const teacher = new Teacher(
  "Marcus",
  1972,
  ["yoga", "cooking", "math"],
  "matematica"
);
console.log(teacher.sayHello());
