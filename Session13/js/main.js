// Promise (resolve نقذت الوعد)
// Promise (reject خلف الوعد)

// Fetch

// var xhttp = new XMLHttpRequest();

// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhttp.send();

// xhttp.onload = function () {
//   console.log(JSON.parse(xhttp.responseText));
// };

let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//   .then(function (res) {
//     res
//       .json()
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch(function () {});
//   })
//   .catch(function (err) {});

// fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {});

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {});

// CallBack Function
// Async Await
// Try Catch
// OOP
