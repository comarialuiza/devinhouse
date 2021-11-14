class Person {
  constructor(name, birthYear, interests) {
    this.name = name;
    this.birthYear = birthYear;
    this.age = 2021 - birthYear;
    this.interests = interests;
  }
  
  sayHello() {
    return `Hello! My name is ${ this.name } and I am interested in ${ this.interests.join(', ') }.`
  }
  
  sayGoodbye() {
    return `Goodbye!`;
  }
}

class Teacher {
  constructor(name, birthYear, interests, subject) {
    super(name, birthYear, interests);
    this.subject = subject;
  }
  
  sayHello() {
    return `Hello! My name is ${ this.name } and I teach ${ subject }`;
  }
}

class Student {
  constructor(name, birthYear, interests, grades) {
    super(name, birthYear, interests);
    this.grades = grades;
  }
  
  calculateAverageGrade() {
    return Math.round((this.grades.reduce((sum, curGrade) => sum + curGrade)) / this.grades.length);
  }
}

const student = new Student("Joana", 1985, ['reading', 'watching movies'], [9, 3, 10]);
console.log(student.calculateAverageGrade());
console.log(student.sayHello());

const teacher = new Teacher("Marcus", 1972, ['yoga', 'cooking', 'math']);
console.log(teacher.sayHello());
