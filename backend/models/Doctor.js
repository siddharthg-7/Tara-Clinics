import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  availability: { type: String, required: true },
  patientSatisfaction: { type: String, default: "100%" },
  patientStoriesCount: { type: String, default: "0+" }
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);
