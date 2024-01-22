import React, { useState } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          required="true"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          placeholder="password"
          required="true"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
