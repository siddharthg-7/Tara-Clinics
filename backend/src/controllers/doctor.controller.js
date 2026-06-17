const Doctor = require('../models/Doctor.model');

exports.getAllDoctors = async (req, res, next) => {
  const doctors = await Doctor.find();
  res.status(200).json({ success: true, results: doctors.length, data: { doctors } });
};

exports.createDoctor = async (req, res, next) => {
  const newDoctor = await Doctor.create(req.body);
  res.status(201).json({ success: true, data: { doctor: newDoctor } });
};

exports.getDoctor = async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ success: false, message: 'No doctor found with that ID' });
  res.status(200).json({ success: true, data: { doctor } });
};

exports.updateDoctor = async (req, res, next) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!doctor) return res.status(404).json({ success: false, message: 'No doctor found with that ID' });
  res.status(200).json({ success: true, data: { doctor } });
};
