import React from "react";
import Navbar from "./components/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <h1 className="error">Oops! Something went wrong.</h1>
    </div>
  );
};

export default Error;
