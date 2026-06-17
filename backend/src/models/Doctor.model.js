const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  credentials: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  satisfaction: {
    type: String,
    default: "0%"
  },
  stories: {
    type: String,
    default: "0+"
  },
  workingHours: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
