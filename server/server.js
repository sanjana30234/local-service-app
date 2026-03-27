const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Connection (LOCAL)
mongoose.connect("mongodb://127.0.0.1:27017/serviceApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));

// 🔥 Booking Schema
const bookingSchema = new mongoose.Schema({
  serviceName: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// 🔥 Services API
app.get("/services", (req, res) => {
  res.json([
    { id: 1, name: "Plumber", price: 200 },
    { id: 2, name: "Electrician", price: 300 },
    { id: 3, name: "Cleaning", price: 150 },
  ]);
});

// 🔥 Book Service (SAVE TO DB)
app.post("/book", async (req, res) => {
  try {
    const { serviceName } = req.body;

    const newBooking = new Booking({ serviceName });
    await newBooking.save();

    res.json({ message: "Booking saved in DB ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 Get Bookings (FETCH FROM DB)
app.get("/bookings", async (req, res) => {
  try {
    const data = await Booking.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});