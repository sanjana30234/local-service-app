import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://local-service-backend-8ah0.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        alert("Login Successful ✅");
      } else {
        alert("Invalid credentials ❌");
      }
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "80px"
    }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={input}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button onClick={handleLogin} style={btn}>
        Login
      </button>
    </div>
  );
}

const input = {
  padding: "10px",
  margin: "10px",
  width: "250px",
  borderRadius: "5px"
};

const btn = {
  padding: "10px 20px",
  background: "#4b6cb7",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

export default Login;