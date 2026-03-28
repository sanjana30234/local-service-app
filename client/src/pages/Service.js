import React, { useState } from "react";

function Services() {

  const [loadingService, setLoadingService] = useState("");

  const bookService = async (service) => {
    setLoadingService(service);

    // Fake payment delay (real feel)
    setTimeout(async () => {
      await fetch("https://local-service-app-v58d.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ serviceName: service }),
      });

      alert("💳 Payment Successful & " + service + " booked ✅");
      setLoadingService("");
    }, 2000);
  };

  const services = [
    {
      name: "Plumber",
      desc: "Fix leaks, pipes, and water issues",
      img: "https://cdn-icons-png.flaticon.com/512/1681/1681796.png"
    },
    {
      name: "Electrician",
      desc: "Electrical repairs and installations",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      name: "Cleaning",
      desc: "Home and office cleaning services",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
    }
  ];

  return (
    <div style={{ textAlign: "center", padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
      
      <h1 style={{ marginBottom: "30px" }}>✨ Premium Home Services</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>

        {services.map((service, index) => (
          <div key={index} style={{
            background: "#fff",
            padding: "20px",
            width: "260px",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>

            <img 
              src={service.img} 
              alt={service.name} 
              style={{ width: "80px", marginBottom: "10px" }}
            />

            <h2>{service.name}</h2>
            <p>{service.desc}</p>

            <button
              onClick={() => bookService(service.name)}
              style={{
                padding: "10px 15px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              {loadingService === service.name ? "Processing Payment..." : "Pay & Book"}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;