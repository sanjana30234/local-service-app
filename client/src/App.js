import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Services from "./components/Services";
import Bookings from "./components/Bookings";

function Home() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "80px",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "40px", color: "#333" }}>
        Welcome to Local Services 🔧
      </h1>

      <p style={{ fontSize: "18px", color: "#666", marginTop: "10px" }}>
        Book electricians, cleaners and more at your doorstep!
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/services">
          <button style={{
            padding: "12px 25px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer"
          }}>
            Explore Services
          </button>
        </a>

        <a href="/login">
          <button style={{
            padding: "12px 25px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Login
          </button>
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;