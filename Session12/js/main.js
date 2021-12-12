// let divEl = document.querySelector(".data");

// let xhttp = new XMLHttpRequest();

// let url = "https://jsonplaceholder.typicode.com/todos";

// xhttp.open("GET", url); // connection
// xhttp.send(); // send request
// Wes Bos Youtube Channel ( 30 )
// xhttp.onload = function () {
//   let data = JSON.parse(this.responseText); // [ {} , {} , {}]

//   // for (var i = 0; i < data.length; i++) {
//   //   divEl.innerHTML += "<p>" + data[i].id + " - " + data[i].title + "</p>";
//   // }

//   data.forEach(function (todo) {
//     divEl.innerHTML += "<p>" + todo.id + " - " + todo.title + "</p>";
//   });
// };

// // Fetch // how to get data using fetch

// Vars

let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");
let form = document.querySelector("form");
let ulEl = document.querySelector("#todos");
let todos = [];

// Events
form.addEventListener("submit", addTodo);

// Functions
function addTodo(e) {
  e.preventDefault();

  todos.push({
    id: todos.length + 1,
    title: title.value,
    desc: desc.value,
    price: price.value,
  });

  displayTodos();
  emptyInputs();
}

function displayTodos() {
  ulEl.innerHTML = "";
  todos.forEach(function (todo) {
    ulEl.innerHTML += ` <li> ${todo.title}  <button onclick="deleteTodo(${todo.id})"> Delete </button> </li> `;
  });
}

function emptyInputs() {
  title.value = "";
  desc.value = "";
  price.value = "";
}

function deleteTodo(id) {
  todos.splice(id, 1);
  displayTodos();
}
