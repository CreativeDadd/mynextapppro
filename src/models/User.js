// src/models/User.js
import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default models.User || model('User', userSchema);
