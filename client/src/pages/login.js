import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful ✅");
    } else {
      alert("Enter details ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      /><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      /><br/>

      <button onClick={handleLogin} style={btnStyle}>
        Login
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "250px"
};

const btnStyle = {
  padding: "10px 20px",
  background: "#4CAF50",
  color: "white",
  border: "none"
};

export default Login;