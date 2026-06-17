const express = require('express');
const doctorController = require('../controllers/doctor.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/')
  .get(doctorController.getAllDoctors)
  .post(authMiddleware.protect, authMiddleware.restrictTo('admin'), doctorController.createDoctor);

router.route('/:id')
  .get(doctorController.getDoctor)
  .patch(authMiddleware.protect, authMiddleware.restrictTo('admin'), doctorController.updateDoctor);

module.exports = router;
