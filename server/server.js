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

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

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

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json({ message: "Login success" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// 🔥 Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});