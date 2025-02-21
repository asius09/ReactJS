import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    if (username && password) {
      console.log(username, password);
      setUser({ username, password });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
