// var week = ["Sat", "Sun", "Mon", "Tusd", "Thur", "Wed", "Fri"];

// week.length = 7

// week[week.length - 1] // last element in array

// console.log(week[0]);
// console.log(week[1]);
// console.log(week[2]);
// console.log(week[3]);
// console.log(week[4]);
// console.log(week[5]);
// console.log(week[6]);

// for (var i = 0; i < week.length; i++) {
//   console.log(week[i]);
  // console.log(i); // 0 1 2 3 4 5 6
// }

// i = 0 | 0 < 7 | week[0] 
// i = 1 | 1 < 7 | week[1]
// i = 2 | 2 < 7 | week[2]


// var car = {
//   name: 'hundi',
//   model: "2021",
//   price: 5000,
// }

// var arr = ["name", "model", "price"];

// for(var i = 0; i < arr.length; i++) {
//   // console.log(arr[i]); 
//   var x = arr[i];// name // "model" // price
//   console.log(car[x]);
// }


// // i = 0 | 0 < 3  | x = arr[0] = "name" | car["name"] => hundi
// // i = 1 | 1 < 3  | x = arr[1] = "model" | car["model"] => 2000
// // i = 2 | 2 < 3  | x = arr[2] = "price" | car["price"] => 5000


// // Array of Objects

// var arr = [ 
//   { name: 'mohamed', age: 20 }, 
//   { name: 'yasser', age: 30 }, 
//   { name: 'tarek', age: 50 },
// ]

// console.log(arr);

// for( var z = 0; z < arr.length; z++ ) {
//   console.log( arr[z].name , arr[z].age );
// }

// document.getElementById('code')
                                                         // 0   1   2   3
// var classes = document.getElementsByClassName('item'); // [div,div,div]
// // classes[0].innerHTML = "hamada"
// // classes[1].innerHTML = "hamada"

// for(var i = 0; i <= classes.length - 1; i++) {
//   classes[i].innerHTML = "hamada"
// }

// i = 0 | 0 <= 2 |  classes[0].innerHTML = hamada
// i = 1 | 1 <= 2 |  classes[1].innerHTML = hamada
// i = 2 | 2 <= 2 |  classes[2].innerHTML = hamada


// document.getElementById("test")
// document.getElementsByClassName("test") // return array
// document.querySelector(".test") 
// var allP = document.querySelectorAll(".item") // return array

// for(var i = 0; i < allP.length; i++) {
//   allP[i].innerHTML = "hamada";
// }

var btn = document.querySelector('button');
var counter = 0;

btn.onclick = function() {
  counter++; // 1
  if(counter == 3) {
    btn.style.display = "none"
  }
}

// font-size  fontSize
// text-transform  textTransform

// var products = [{title: 'item1', desc: 'wekjflwehkf', price: 2000}]

// Task Steps
// 1- create 3 inputs in form
// 2- after click on add button
// 3- create array of object that hold title and desc and price of product 
// 4- array of object
// 5- loop through array and put values into ul 