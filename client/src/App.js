import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Service from "./pages/Service";
import Bookings from "./pages/Bookings";
import Home from "./pages/home";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#1e1e2f",
      color: "white"
    }}>
      <h2>Local Services</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/bookings" style={linkStyle}>Bookings</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none"
};

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;