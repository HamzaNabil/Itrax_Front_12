// SlidesShow => Slider
// Pagination[Static] => Dynamic

// let imgElement = document.querySelector("#slideshow");
// let arrOfImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
// let i = 0; // 0 => 2

// function slideShow() {
//   imgElement.setAttribute("src", arrOfImages[i]); //
//   // 0
//   if (i < arrOfImages.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout(function () {
//     slideShow();
//   }, 2000);
// }

// slideShow();

// Pagination
let list = document.querySelector(".list");
let pagination = document.querySelector(".pagination");

let products = [
  "product 1", // 0
  "product 2", // 1
  "product 3", // 2
  "product 4", // 3
  "product 5",
  "product 6",
  "product 7",
  "product 8",
];

let items_per_page = 2;
let current_page = 1;

let start = (current_page - 1) * items_per_page;
let end = start + items_per_page;

function displayProducts(start, end) {
  list.innerHTML = "";
  products.slice(start, end).forEach(function (item) {
    list.innerHTML += `<p> ${item} </p>`;
  });
}

function createPagination() {
  let pages = Math.ceil(products.length / items_per_page);
  for (let i = 0; i < pages; i++) {
    pagination.innerHTML += `<button onclick="paginateItems(${i + 1})"> ${
      i + 1
    } </button>`;
  }
}

// "<p>" + kjwefgbkjwe + "</p>"
// // Template String
// `<p> ${title} </p>`

function paginateItems(c) {
  let start = (c - 1) * items_per_page;
  let end = start + items_per_page;
  displayProducts(start, end);
}

displayProducts(start, end);

if (products.length > items_per_page) {
  createPagination();
}
