import React, { useContext, useState } from "react";
import { HeroContext } from "../shared/HeroContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(HeroContext);

  return (
    <div className="loginPage">
      <div>
        <label htmlFor="Username">Username</label>
        <input
          className="username"
          id="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {error &&
          username.length < 3 &&
          "Username must be more than 3 characters"}
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error &&
          password.length < 3 &&
          "Password must be more than 3 characters"}
      </div>
      <button
        className="loginButton"
        onClick={() => {
          if (username.length < 3 || password.length < 3) {
            setError(true);
            return;
          }
          setUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
