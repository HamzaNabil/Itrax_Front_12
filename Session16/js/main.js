// function create object

// function person(name, age) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }

// Constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    console.log(this.name, this.age);
  };
}

let p = new Person("hamza", 30);
p.info();

function Student(name, age, degree) {
  Person.call(this, name, age);
  this.degree = degree;

  this.getDegree = function () {
    console.log(this.degree);
  };

  this.info = function () {
    console.log("hello Student");
  };
}

let s = new Student("yasser", 40, 50);
console.log(s);
s.info();
