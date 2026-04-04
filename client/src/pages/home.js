import React from "react";

function Home() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      padding: "20px"
    }}>
      
      <h1 style={{
        fontSize: "45px",
        color: "#333",
        marginBottom: "20px"
      }}>
        Book Trusted Home Services 🏠
      </h1>

      <p style={{
        color: "#777",
        fontSize: "18px",
        marginBottom: "30px"
      }}>
        Electrician, Cleaning, Plumbing & more at your doorstep
      </p>

      <a href="/services">
        <button style={btn}>
          Explore Services
        </button>
      </a>

    </div>
  );
}

const btn = {
  padding: "14px 30px",
  background: "#4b6cb7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};

export default Home;