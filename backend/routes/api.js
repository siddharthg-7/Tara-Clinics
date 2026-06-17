import express from 'express';
import { Appointment } from '../models/Appointment.js';
import { Doctor } from '../models/Doctor.js';
import { Gallery } from '../models/Gallery.js';
import { Testimonial } from '../models/Testimonial.js';

const router = express.Router();

// --- Appointments ---
router.post('/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Doctors ---
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Gallery ---
router.get('/gallery', async (req, res) => {
  try {
    const images = await Gallery.find({ isActive: true });
    res.json(images);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Testimonials ---
router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
