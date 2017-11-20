import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
})

// create new collection called 'users' and use the userSchema
mongoose.model('users', userSchema);

