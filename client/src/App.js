import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Services from "./pages/services";
import Bookings from "./pages/bookings";

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

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to Local Services 🔧</h1>
      <p>Book electricians, cleaners and more!</p>

      <Link to="/services">
        <button style={btnBlue}>Explore Services</button>
      </Link>
    </div>
  );
}

const btnBlue = {
  padding: "12px 25px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  marginTop: "20px"
};

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