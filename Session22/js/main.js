let arr = ["ahmed", "mohamed", "yasser"];

arr.length; // 3

// arr[arr.length] = "nader";
// arr[arr.length + 1] = "nader";
// arr[arr.length + 2] = "nader";

// arr.pop(); // remove last ele
// let x = arr.shift();
// console.log(x);

console.log(arr);

// let arr2 = [
//   1,
//   "ahmed",
//   { x: 1 },
//   [1, 3],
//   function () {
//     console.log("this is function");
//   },
//   true,
// ];

// let x = "x";

// for (var i = 0; i < arr2.length; i++) {
//   if (typeof arr2[i] == "function") {
//     arr2[i]();
//   }
// }

// code
// arr2[2][x]
// {arr2[2]}[x]

// arr2[3][0]; // [1,3]

// let arr3 = ["ahmed", 5, [9, 10]]

// ["ahmed", 5, [9, 10]][2][1]  //

// let obj = {
//     a: 1,
//     b: 2
// }
// obj.a
// obj["a"]

// let items1 = ["data", "info"];
// let items2 = [1, 2, 3];

// Merge 2 Arrays

// let items3 = items2.concat(items1);
// console.log(items3);

// let data = ["item1", "item2", "item3"];

// delete data[1];

// console.log(data);

// let data = ["item1", "item2", "item3", "item4"];

// let newData = data.slice(10, 20); // pagination

// console.log(newData);

// Date
// let date = new Date();

// console.log(date.getDay() + 1);

// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// ==============================================================

let products = [
  { id: 1, title: "product 1", price: 1000 }, // item
  { id: 2, title: "product 2", price: 2000 }, // item
  { id: 3, title: "product 3", price: 3000 }, // item
];

// let newP = products.map(p => p)

// filter
// filter return true => add this item to array
// filter return false => remove this item from array

// let filteredProducts = products.filter((item) => item.id != 2);
// console.log(filteredProducts);

// let it = products.find((item) => item.id == 5);
// console.log(it);

// let total = 0;

// for (var i = 0; i < products.length; i++) {
//   total += products[i].price;
// }

// console.log(total);
// let total = 0;
// products.map((item) => {
//   total += item.price;
// });
// console.log(total);

// Reduce

// let totalPrice = products.reduce((total, item) => {
//   return total + item.price;
// }, 0);

// console.log(totalPrice);

// Angular + React + Vue => JS

// Library + L + L   =
// Framework [  ]

// React UI Library [JS] => Component
