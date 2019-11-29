const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    unique: true,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: false
  },
  userImage: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
