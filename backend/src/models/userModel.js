import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    // required: [true, 'Image is required'],
  },
  fullname: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  mobile:{
    type:String,
    minlength: [10, 'Password must be at least 10 characters'],
    match: [/^\d+$/, 'Mobile number must contain only digits'],
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
