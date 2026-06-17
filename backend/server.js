import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
// We'll connect when a URI is provided, but we don't want the server to crash if it's missing in dev
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taraclinics';

import apiRoutes from './routes/api.js';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected successfully'))
  .catch((err) => console.log('MongoDB Connection Error: ', err));

app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Tara Clinics API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
