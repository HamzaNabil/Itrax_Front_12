import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add Product</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
