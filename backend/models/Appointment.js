import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  doctorId: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

export const Appointment = mongoose.model('Appointment', appointmentSchema);
