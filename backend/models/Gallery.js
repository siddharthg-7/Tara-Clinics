import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  url: { type: String, required: true },
  category: { type: String, enum: ['Infrastructure', 'Consultation', 'Cabin', 'Equipment', 'Patient Care'], required: true },
  alt: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const Gallery = mongoose.model('Gallery', gallerySchema);
