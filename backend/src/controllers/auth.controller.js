const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '90d'
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password' });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({ success: false, message: 'Incorrect email or password' });
  }

  const token = signToken(user._id);

  res.status(200).json({
    success: true,
    token,
    data: { user }
  });
};

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || 'staff'
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    success: true,
    token,
    data: { user: newUser }
  });
};
