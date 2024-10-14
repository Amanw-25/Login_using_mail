import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed password
  userType: { type: String, required: true },
  isAuthenticated: { type: Boolean, default: false },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
