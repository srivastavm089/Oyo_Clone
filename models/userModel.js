import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

// Check if the model already exists and use it, otherwise create a new model
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
