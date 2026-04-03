import React from "react";
import { Link } from "react-router-dom";

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

export default Navbar;