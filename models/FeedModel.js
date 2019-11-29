const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  username: {
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
  date: {
    type: Date,
    default: Date.now
  }
});

const FeedModel = mongoose.model("feed", FeedSchema);

module.exports = FeedModel;
