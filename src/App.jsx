import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default App;
