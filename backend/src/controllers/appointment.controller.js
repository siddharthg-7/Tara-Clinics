const Appointment = require('../models/Appointment.model');

exports.createAppointment = async (req, res, next) => {
  const newAppointment = await Appointment.create(req.body);
  res.status(201).json({ success: true, data: { appointment: newAppointment } });
};

exports.getAllAppointments = async (req, res, next) => {
  const appointments = await Appointment.find().populate('doctor');
  res.status(200).json({ success: true, results: appointments.length, data: { appointments } });
};

exports.updateAppointmentStatus = async (req, res, next) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id, 
    { status: req.body.status }, 
    { new: true, runValidators: true }
  );
  if (!appointment) return res.status(404).json({ success: false, message: 'No appointment found with that ID' });
  res.status(200).json({ success: true, data: { appointment } });
};
