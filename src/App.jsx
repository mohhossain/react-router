import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function App({ user }) {
  const [products, setProducts] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://curious-plum-hourglass.glitch.me/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <p>Logged in user: {user}</p>

      <div className="container">
        <Outlet context={{ products, setCartCount, cartCount }} />
      </div>

      {/* <footer>This is the footer</footer> */}
    </div>
  );
}

export default App;
