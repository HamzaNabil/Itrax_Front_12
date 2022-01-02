let inpname = document.querySelector(".inpname");
let inpprie = document.querySelector(".inpprie");
let inpdesc = document.querySelector(".inpdesc");
let inpcate = document.querySelector(".inpcate");

let add = document.querySelector(".addProduct");
let editProduct = document.querySelector(".editProduct");
let inpp = document.querySelectorAll(".container input");

let productContainer = [];

add.onclick = function () {
  let products = {
    id: productContainer.length + 1,
    name: inpname.value,
    price: inpprie.value,
    description: inpdesc.value,
    category: inpcate.value,
  };
  productContainer.push(products);
  displayProducts();
  clearInput();
};

function displayProducts() {
  let cartona = "";
  let box = document.querySelector(".box");
  console.log(productContainer);
  productContainer.forEach(function (i) {
    cartona += `
        <p>${i.id}</p>
        <h3>${i.name}</h3>
        <h3>${i.price}</h3>
        <h3>${i.description}</h3>
        <h3>${i.category}</h3> 

       <button onclick="deleteProduct(${i.id - 1})">delete</button>
       <button onclick="updateProduct(${i.id - 1})">update</button>       
        `;
  });
  box.innerHTML = cartona;
}

function deleteProduct(idDelete) {
  productContainer.splice(idDelete, 1);
  displayProducts();
}
function updateProduct(idUpdate) {
  inpname.value = productContainer[idUpdate].name;
  inpprie.value = productContainer[idUpdate].price;
  inpdesc.value = productContainer[idUpdate].description;
  inpcate.value = productContainer[idUpdate].category;
  editProduct.style.display = "block";
  add.style.display = "none";
  document.querySelector(".editItems").value = idUpdate;
}

editProduct.addEventListener("click", edit);
function edit() {
  let btnHiddenValue = document.querySelector(".editItems").value;
  productContainer[btnHiddenValue].name = inpname.value;
  productContainer[btnHiddenValue].price = inpprie.value;
  productContainer[btnHiddenValue].description = inpdesc.value;
  productContainer[btnHiddenValue].category = inpcate.value;

  editProduct.style.display = "none";
  add.style.display = "block";
  displayProducts();
  clearInput();
}

function clearInput() {
  inpp.forEach(function (i) {
    i.value = "";
  });
}
