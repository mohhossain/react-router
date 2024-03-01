import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Amaze-zone</h1>

      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart"> 🛒 </Link>
      </div>
    </nav>
  );
};

export default Navbar;
