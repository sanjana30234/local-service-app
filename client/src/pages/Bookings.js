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
      await fetch("https://local-service-backend-8ah0.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, service })
      });

      alert("Booking Successful ✅");
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "80px"
    }}>
      <h2>Book Your Service</h2>

      <input placeholder="Your Name" onChange={e => setName(e.target.value)} style={input}/>
      <input placeholder="Service" onChange={e => setService(e.target.value)} style={input}/>

      <button onClick={handleBooking} style={btn}>Confirm Booking</button>
    </div>
  );
}

const input = {
  padding: "12px",
  margin: "10px",
  width: "250px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btn = {
  padding: "12px 25px",
  background: "#4b6cb7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default Bookings;