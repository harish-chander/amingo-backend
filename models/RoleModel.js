const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  roleID: {
    type: Number,
    required: true
  },
  roleName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const RoleModel = mongoose.model("role", RoleSchema);

module.exports = RoleModel;
