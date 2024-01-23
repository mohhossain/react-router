import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();
  return (
    <div>
      <div className="banner">
        <h2>Welcome to Amaze-zone - the best place to buy stuff online!</h2>
        <h3> {state} </h3>
        <p>
          We sell everything at very low prices. Check out our amazing
          selection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatum.
        </p>
      </div>
    </div>
  );
}

export default Home;
