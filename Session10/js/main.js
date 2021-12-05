
// // Define Variables
// const titleEl = document.querySelector('input:first-of-type');
// const descEl = document.querySelector('input:nth-of-type(2)');
// const priceEl = document.querySelector('input:nth-of-type(3)');
// const formEl = document.querySelector('form');
// const ulEl = document.querySelector('ul');
// var products = [];

// // Events 
// formEl.addEventListener("submit", addItem)

// // Function

// function addItem(e) {
//   e.preventDefault();
//   var item = {
//     title: titleEl.value,
//     desc: descEl.value,
//     price: priceEl.value
//   }
//   products.push(item);
//   ulEl.innerHTML = "";
//   for(var i = 0; i < products.length; i++) {
//     ulEl.innerHTML += "<li>" + products[i].title +  products[i].desc +  products[i].price +  "</li>"
//   }
// }

// undefined | err 

// var x; // x is defined but value is undefined

// console.log(x); // err is not defined 

// var x = 2;

// querySelectorAll // [  ]

// for

printUser();

// Traditional Function
function printUser() {
  console.log("Username Hamza");
}

// Expression Function
var printData = function() {
  console.log("Data");
}

printData();

// Arrow Function 
let test = () => {
  console.log("test");
}

