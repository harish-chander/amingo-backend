const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  feedImage: {
    type: String
  },
  likes: {
    type: Array,
    default: []
  },
  shares: {
    type: Array,
    default: []
  },
  edited: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const FeedModel = mongoose.model("feed", FeedSchema);

module.exports = FeedModel;
