var person = {
  name: "hamza",
  position: "front end",
  length: "welkfhlkwe",
  friends: [
    {
      name: "ahmed",
      position: "front",
      items: [{ x: 1 }, { x: 8 }],
    },
    {
      name: "yasser",
      position: "back",
      items: [{ x: 5 }, { x: 20 }],
    },
  ],
};

for (var i = 0; i < 2; i++) {
  // console.log(person.friends[i].items);

  for (var j = 0; j < 2; j++) {
    console.log(person.friends[i].items[j].x);
  }
}

/* - Step 0 // i = 0 | i < 2 | 
               j = 0 | j < 2 | person.friends[0].items[0].x // 1
               j = 1 | j < 2 | person.frineds[0].items[1].x // 8
               
  - Step 1 // i = 1 | i < 2
              j = 0 | j < 2 | person.frineds[1].items[0].x // 5
              j = 1 | j < 2 | person.frineds[1].items[1].x // 20

*/

// var arr = [
//   2,
//   5,
//   "hello JS",
//   true,
//   false,
//   {
//     title: "test",
//     model: 2021,
//   },
//   function () {
//     console.log("hello function from arr");
//   },
//   [{ x: "hamada", y: 20 }],
// ];

// arr.length = 8

// arr.length - 1 = 7

// arr[ arr.length - 1 ]

// arr[7][0].y

// nested for
// for() {
//   for() {}
// }
// nested if
// if() {
//   if() {
//     if() {}
//   }
//  }

// JSON = Javascript Object Notation

var x = {}; // litreal object
var y = "{}"; //

var n = []; //

var t = "[]";

var d = 1; // number
var d = "wekjfwgekj"; // string
var d = true; // boolean
var d = {}; // object
var d = []; // object

// Object
// object {}  array []

/*
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
]
forEach
*/
var x = "[{}, {} , {}]"; // JSON

// JSON.parse(x) // "[]"  => []   "{}" => {}
// convert string to object ( {} | [])

// JSON.stringify(x)  [] => "[]"  {} => "{}"
// convert object to string
