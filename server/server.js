const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (FINAL FIXED)
mongoose.connect("mongodb+srv://sanjanaganathe467_db_user:Sanjana123@cluster0.xu91o53.mongodb.net/serviceApp?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Atlas Connected ✅"))
.catch((err) => console.log(err));

// ✅ Schema
const bookingSchema = new mongoose.Schema({
  serviceName: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// ✅ Routes

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Get all bookings
app.get("/bookings", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

// Add booking
app.post("/bookings", async (req, res) => {
  const newBooking = new Booking({
    serviceName: req.body.serviceName,
  });

  await newBooking.save();
  res.json({ message: "Booking saved successfully ✅" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});