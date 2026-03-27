import { useEffect, useState } from "react";

function Service() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleFakePayment = async (service) => {
    setLoading(true);

    setTimeout(async () => {
      await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ serviceName: service.name }),
      });

      setLoading(false);
      alert("💳 Payment Successful!");
    }, 2000);
  };

  // 🔥 Images + Ratings
  const serviceDetails = {
    Plumber: {
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
      rating: "⭐ 4.7",
    },
    Electrician: {
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048315.png",
      rating: "⭐ 4.8",
    },
    Cleaning: {
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      rating: "⭐ 4.6",
    },
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", background: "#f5f7fa", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "30px" }}>✨ Premium Services</h1>

      {loading && <h3>Processing Payment... ⏳</h3>}

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap"
      }}>
        {services.map((s) => (
          <div key={s.id} style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            width: "240px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
            transition: "0.3s"
          }}>
            
            <img
              src={serviceDetails[s.name].img}
              alt={s.name}
              style={{ width: "90px", marginBottom: "10px" }}
            />

            <h3>{s.name}</h3>
            <p>{serviceDetails[s.name].rating}</p>

            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              ₹{s.price}
            </p>

            <button
              onClick={() => handleFakePayment(s)}
              style={{
                padding: "10px",
                background: "linear-gradient(45deg, #007bff, #00c6ff)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px"
              }}
            >
              Pay & Book
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;