const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (IMPORTANT: your password is Sanjana123)
mongoose.connect(
  "mongodb+srv://sanjanaganathe467_db_user:Chinni123@cluster0.xu91o53.mongodb.net/localservices?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.log(err));

// ✅ Booking Schema
const bookingSchema = new mongoose.Schema({
  serviceName: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/test", (req, res) => {
  res.send("Test route working");
});

// ✅ GET ALL BOOKINGS
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// ✅ CREATE BOOKING
app.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking({
      serviceName: req.body.serviceName,
    });

    await newBooking.save();
    res.json({ message: "Booking saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});