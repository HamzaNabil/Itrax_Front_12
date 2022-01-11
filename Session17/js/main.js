// Game
function Charater(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
}

Charater.prototype.printStatus = function () {
  console.log(
    `Name: ${this.name}... and Strength ${this.strength} ... and health ${this.health}`
  );
};

Charater.prototype.attack = function (opponent) {
  console.log(`${this.name} attack ${opponent.name} `);

  opponent.health -= this.strength;
  console.log(`Opponent Health ${opponent.name} is ${opponent.health}`);
};

Charater.prototype.isAlive = function () {
  if (this.health > 0) {
    console.log(`${this.name} is alive`);
  } else {
    console.log(`${this.name} is died`);
  }
};

let hamza = new Charater("hamza", 10, 100);
hamza.printStatus();

let ahmed = new Charater("ahmed", 5, 100);
ahmed.printStatus();

hamza.attack(ahmed);
ahmed.attack(hamza);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);
hamza.attack(ahmed);

ahmed.isAlive();
