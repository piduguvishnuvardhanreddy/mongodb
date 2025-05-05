
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  boyName: {
    type: String,
    required: true,
    maxlength: 200,
  },
  girlName: {
    type: String,
    required: true,
    maxlength: 200,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

