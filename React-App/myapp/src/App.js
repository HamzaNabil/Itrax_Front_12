import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { products as items } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import CreateProduct from "./pages/CreateProduct";
import ViewProductDetails from "./pages/ViewProductDetails";

function App() {
  let [products, setProducts] = useState(items);
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);

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
      id: products.length + 1,
      title: title,
      price: price,
      imgUrl: "",
    };
    setProducts([...products, addedProduct]);
  };

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ListProducts products={products} />}
          />
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
          <Route
            path="/products/:id"
            element={<ViewProductDetails products={products} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
