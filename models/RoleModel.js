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
const GroupSchema = new Schema({
  groupName: {
    type: String,
    unique: true,
    required: true
  },
  groupMembers: {
    type: Array,
    required: true
  },
  groupAdmin: {
    type: Array,
    required: true
  },
  groupDesc: {
    type: String,
    required: true
  },
  groupImage: {
    type: String,
    required: false
  }
});

const RoleModel = mongoose.model("role", RoleSchema);

module.exports = { RoleModel };
