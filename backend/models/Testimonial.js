import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
  timeAgo: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const Testimonial = mongoose.model('Testimonial', testimonialSchema);
