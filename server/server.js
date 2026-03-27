const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// 📦 SCHEMA
const bookingSchema = new mongoose.Schema({
  serviceName: String,
});

// 📁 MODEL
const Booking = mongoose.model("Booking", bookingSchema);

// SERVICES DATA
let services = [
  { id: 1, name: "Plumber", price: 200 },
  { id: 2, name: "Electrician", price: 300 },
  { id: 3, name: "Cleaning", price: 150 },
];

// TEST
app.get("/", (req, res) => {
  res.send("Backend running");
});

// SERVICES
app.get("/services", (req, res) => {
  res.json(services);
});

// BOOK SERVICE (SAVE TO DB)
app.post("/book", async (req, res) => {
  const { serviceName } = req.body;

  try {
    const newBooking = new Booking({ serviceName });
    await newBooking.save();

    res.json({ message: "Booked successfully (saved in DB)" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error saving booking" });
  }
});

// GET BOOKINGS (FROM DB)
app.get("/bookings", async (req, res) => {
  try {
    const data = await Booking.find();
    res.json(data);
  } catch (err) {
    res.json([]);
  }
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});