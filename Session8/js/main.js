//  Task

// var inputEl = document.getElementById("input");
// var btnEl = document.getElementById("btn");
// var ulEl = document.getElementById("ulList");
// btnEl.onclick = function () {
//   ulEl.innerHTML += "<li>" + inputEl.value + "</li>";
//   inputEl.value = "";
// };

// define function

// Tracing
function doThat(str) {
  if (str == "data") {
    console.log("yes its data");
  } else {
    console.log("no");
  }
}

doThat("test");
doThat("data");

// Switch || if
var x = 11;

switch (x) {
  case 5:
    console.log("yes 5");
    break;

  case 10:
    console.log("yes 10");
    break;

  default:
    console.log("no");
    break;
}

// DataTypes

// var arr = [20, 60, 80, 100, 2200];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// Looping

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// i = 1 | 1 < 10   | 1
// i = 2 | 2 < 10   | 2
// i = 3 | 3 < 10   | 3
// i = 4 | 4 < 10   | 4
// .....
// i = 9 | 9 < 10   | 9
// i = 10 | 10 <= 10 | 10
// i = 11 | 11 <= 10

// Bad For => infinity loop
// for (var t = 5; t >= 3; t++) {
//   console.log(t); // 5 6 7
// }

//  i = 5 | 5 >= 3 | 5
//  i = 6 | 6 >= 3 | 6
//  i = 7 | 7 >= 3 | 7

// var selectEl = document.getElementById("select");

// for (var i = 1990; i <= 2021; i++) {
//   selectEl.innerHTML += "<option>" + i + "</option>";
// }

// object

// var carName = "BMW";
// var carYear = "2022";
// var carPrice = "2000";
// var carModel = "c120";
// var carColor = "black";

// key value
var car = {
  name: "BMW",
  year: "2022",
  price: "2000",
  model: "c120",
  color: "black",
};

// create an array that hold all keys of car object
// print all value of car object depend on array U create it
