const express = require('express');
const appointmentController = require('../controllers/appointment.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', appointmentController.createAppointment);

// Protect all routes below this middleware
router.use(authMiddleware.protect);

router.route('/')
  .get(authMiddleware.restrictTo('admin', 'staff'), appointmentController.getAllAppointments);

router.route('/:id/status')
  .patch(authMiddleware.restrictTo('admin', 'staff'), appointmentController.updateAppointmentStatus);

module.exports = router;
