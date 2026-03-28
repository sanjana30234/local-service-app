import { useEffect, useState } from "react";

function Bookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://local-service-app-v58d.onrender.com/bookings")
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.log("Error:", result);
          setData([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setData([]);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Bookings</h2>

      {data.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        data.map((b, index) => (
          <div key={index} style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            {b.serviceName}
          </div>
        ))
      )}
    </div>
  );
}

export default Bookings;