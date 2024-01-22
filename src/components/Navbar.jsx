import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Amaze-zone</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a className="login" href="/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
