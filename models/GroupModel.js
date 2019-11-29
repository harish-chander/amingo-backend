const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const GroupModel = mongoose.model("group", GroupSchema);

module.exports = GroupModel;
