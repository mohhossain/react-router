import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const navClass = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "";
  return (
    <nav className="navbar">
      <h1 className="logo">Amaze-zone</h1>
      <ul>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={navClass}>
          Products
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/cart" className={navClass}>
          Cart
        </NavLink>
        <NavLink to="/login" className={navClass + " login"}>
          Login
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
