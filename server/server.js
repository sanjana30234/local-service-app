const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Connection
mongoose.connect("mongodb+srv://sanjanaganathe467_db_user:Chinni123@cluster0.xu91o53.mongodb.net/localservices?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.log(err));

// 🔥 Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  service: String
});

const Booking = mongoose.model("Booking", bookingSchema);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ POST Booking (SAVE)
app.post("/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

// ✅ GET Bookings (FETCH)
app.get("/bookings", async (req, res) => {
  try {
    const data = await Booking.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// 🔥 Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});