import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await fetch("https://local-service-backend-8ah0.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      alert("Signup Successful ✅");
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Signup</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} style={input}/>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={input}/>

      <button onClick={handleSignup} style={btn}>Signup</button>
    </div>
  );
}

const input = {
  padding: "10px",
  margin: "10px",
  width: "250px"
};

const btn = {
  padding: "10px 20px",
  background: "green",
  color: "white",
  border: "none"
};

export default Signup;