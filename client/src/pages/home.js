function Home() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      padding: "20px"
    }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        🛠️ Local Service App
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Book trusted services like Plumber, Electrician & Cleaning easily!
      </p>

      <div style={{ marginTop: "40px" }}>
        <a href="/services">
          <button style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Explore Services
          </button>
        </a>
      </div>

    </div>
  );
}

export default Home;