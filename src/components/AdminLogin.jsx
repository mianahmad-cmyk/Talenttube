import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AdminLogin.module.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    if (username === "admin" && password === "ahmad@8125") {
      setError("");
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginBox}>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
