import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Service from "./pages/Service";
import Bookings from "./pages/Bookings";
import Home from "./pages/home";
import login from "./components/login";
import navbar from ".components/navbar";

function App() {
  return (
    <Router>

      {/* 🔥 PREMIUM NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "linear-gradient(45deg, #007bff, #00c6ff)",
        color: "white",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>✨ ServiceApp</h2>

        <div>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/bookings" style={linkStyle}>Bookings</Link>
        </div>
      </nav>

      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<login />} />
        <Route path="/login" element={<login />} />
      </Routes>

    </Router>
  );
}

const linkStyle = {
  margin: "0 15px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px"
};

export default App;