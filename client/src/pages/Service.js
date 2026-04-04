import React from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  const services = [
    {
      name: "Electrician ⚡",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png"
    },
    {
      name: "Cleaning 🧹",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
    },
    {
      name: "Plumbing 🚿",
      img: "https://cdn-icons-png.flaticon.com/512/1681/1681646.png"
    }
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "80px",
      flexWrap: "wrap"
    }}>
      {services.map((service, index) => (
        <div key={index} style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}>
          
          <img
            src={service.img}
            alt={service.name}
            style={{ width: "80px", marginBottom: "15px" }}
          />

          <h3>{service.name}</h3>

          <button
            onClick={() => navigate("/bookings")}
            style={btn}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

const btn = {
  marginTop: "15px",
  padding: "10px 20px",
  background: "#4b6cb7",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Service;