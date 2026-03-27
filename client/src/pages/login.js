import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Button clicked");

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",   // IMPORTANT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      alert(data.message);
    } catch (err) {
      console.log("ERROR:", err);
      alert("Error connecting to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;