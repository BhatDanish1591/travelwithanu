const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/kashmir-travel';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Booking Schema & Model
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true },
  package: { type: String, required: true },
  route: String,
  date: Date,
  adults: { type: Number, default: 1 },
  children: { type: Number, default: 0 },
  seniors: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// API Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking received successfully', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: 'Failed to process booking', details: error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running smoothly' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
