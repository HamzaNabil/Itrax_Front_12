class Car {
  constructor(name, modal, color) {
    this.name = name;
    this.modal = modal;
    this.color = color;
  }

  details() {
    console.log(this.name, this.modal, this.color);
  }
}

// Child Class | Derived class
class Car2 extends Car {
  constructor(name, modal, color, badge) {
    super(name, modal, color);
    this.badge = badge;
  }
}

let bmw = new Car("BMW", 2020, "black");
let byd = new Car("BYD", 2010, "Yellow");

let y = new Car2("y", 2010, "black", "red");

console.log(y);

// Git | Git Hub
