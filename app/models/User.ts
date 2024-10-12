import  { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  // name: {
  //   type: String,
  //   required: [true, 'Please provide a name'],
  // },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Check if the model exists to avoid overwriting in development
const User = models.User || model('User', UserSchema);

export default User;
