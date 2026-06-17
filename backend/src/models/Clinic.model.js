const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Tara Super Speciality Clinic'
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  workingHours: {
    weekdays: {
      type: String,
      default: '9:00 AM - 10:30 PM'
    },
    weekends: {
      type: String,
      default: '10:00 AM - 10:30 PM'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Clinic', clinicSchema);
