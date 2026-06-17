const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.routes');
const doctorRouter = require('./routes/doctor.routes');
const appointmentRouter = require('./routes/appointment.routes');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/appointments', appointmentRouter);

// Handle undefined routes
app.all('*', (req, res, next) => {
  res.status(404).json({ success: false, message: `Can't find ${req.originalUrl} on this server!` });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
