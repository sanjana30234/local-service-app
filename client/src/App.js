import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Bookings from "./pages/Bookings";
import Home from "./pages/home";
import Service from "./pages/Service";
import Signup from "./pages/Signup";

// 🔥 NAVBAR
function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "linear-gradient(90deg, #4b6cb7, #182848)",
      color: "white",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>Local Services 🚀</h2>

      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/services" style={linkStyle}>Services</a>
        <a href="/bookings" style={linkStyle}>Bookings</a>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/signup" style={linkStyle}>Signup</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  margin: "0 15px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

// 🔥 MAIN APP
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;