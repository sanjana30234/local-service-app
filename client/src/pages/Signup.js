import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    console.log("Signup button clicked");

    try {
      const res = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
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
      <h2>Signup Page</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleSignup}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;