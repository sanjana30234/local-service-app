import React, { useState } from "react";

function Bookings() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleBooking = async () => {
    if (!name || !service) {
      alert("Enter all details ❌");
      return;
    }

    try {
      const res = await fetch("https://local-service-backend-8ah0.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, service })
      });

      const data = await res.json();
      alert("Booking Successful ✅");

    } catch (err) {
      alert("Error booking ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Book Service</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={input}
      />

      <input
        type="text"
        placeholder="Enter service (Electrician, Cleaning)"
        onChange={(e) => setService(e.target.value)}
        style={input}
      />

      <br />

      <button onClick={handleBooking} style={btn}>
        Confirm Booking
      </button>
    </div>
  );
}

const input = {
  padding: "10px",
  margin: "10px",
  width: "250px"
};

const btn = {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

export default Bookings;