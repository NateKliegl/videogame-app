import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../shared/HeroContext";
import useAxios from "../hooks/useAxios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(HeroContext);
  const [userObj, setUserObj] = useState(null);
  const { json } = useAxios("/api/users/login", "post", userObj);

  useEffect(() => {
    if (json && json.success) {
      setUser(json.data);
    }
  }, [setUser, json]);

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
          setUserObj({ username, password });
        }}
      >
        Login
      </button>
      <div>{json && json.error}</div>
    </div>
  );
}
