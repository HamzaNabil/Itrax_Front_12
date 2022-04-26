import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { products as items } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import CreateProduct from "./pages/CreateProduct";
import ViewProductDetails from "./pages/ViewProductDetails";
import ProductContext from "./context/ProductContext";
import Counter from "./Counter";
import Users from "./Users";
import { deleteProduct, addProduct } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let { product } = useSelector((state) => state);
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  // Logic
  let handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  let handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  let handleAddProduct = (e) => {
    e.preventDefault();
    let addedProduct = {
      id: product.products.length + 1,
      title: title,
      price: price,
      imgUrl: "",
    };
    dispatch(addProduct(addedProduct));
    // setProducts([...products, addedProduct]);
  };

  // id 2
  let handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  let handleFilter = (e) => {
    let allProducts = items.filter((p) => p.price == e.target.value);
    // setProducts(allProducts);
  };

  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* <select onChange={handleFilter}>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
        </select> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ListProducts handleDeleteProduct={handleDeleteProduct} />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/create"
            element={
              <CreateProduct
                handleTitleChange={handleTitleChange}
                handlePriceChange={handlePriceChange}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="/products/:id" element={<ViewProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
