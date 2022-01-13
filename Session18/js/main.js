// Function

function Charater(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;

  this.attackBtn = document.querySelector(`.${this.name}-attack`);
  this.healthBtn = document.querySelector(`.${this.name}-health`);
  this.progress = document.querySelector(`.${this.name}-progress`);
  this.healthStatus = document.querySelector(`.${this.name}-status`);
}

Charater.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.progress.innerHTML = opponent.health;
  } else {
    opponent.attackBtn.remove();
    opponent.healthBtn.remove();
    opponent.progress.innerHTML = "0";
    opponent.healthStatus.innerHTML = `${opponent.name} is died`;
  }
};

Charater.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progress.innerHTML = this.health;
  } else {
    this.health = 100;
  }

  if (this.progress.innerHTML > 100) {
    this.progress.innerHTML = 100;
  }
};

Charater.prototype.status = function () {
  console.log(`${this.name} --- health = ${this.health}`);
};

let hamza = new Charater("hamza", 10, 100);
let mohamed = new Charater("mohamed", 7, 100);

hamza.attackBtn.addEventListener("click", function () {
  hamza.attack(mohamed);
});

hamza.healthBtn.addEventListener("click", function () {
  hamza.makeHealth();
});

mohamed.attackBtn.addEventListener("click", function () {
  mohamed.attack(hamza);
});

mohamed.healthBtn.addEventListener("click", function () {
  mohamed.makeHealth();
});
