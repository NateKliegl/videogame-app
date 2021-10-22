import useAxios from "../hooks/useAxios";
import React, { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const { json } = useAxios("/api/users/signup", "post", userObj);

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          id="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        {error &&
          username.length < 4 &&
          "Username has to be more than 4 characters"}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        {error &&
          password.length < 8 &&
          "Password must be more than 8 characters "}
      </div>
      <button
        onClick={() => {
          if (username.length < 4 || password.length < 8) {
            setError(true);
            return;
          }
          setUserObj({ username, password });
        }}
      >
        Signup
      </button>
      <div>{json && json.error}</div>
      <div>{json && json.data}</div>
    </div>
  );
}
