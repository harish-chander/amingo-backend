const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  messageId: {
    type: Number,
    required: true
  },
  messageMetaData: [
    {
      members: [
        {
          from: {
            type: String,
            required: true
          },
          to: {
            type: Array,
            required: true
          }
        }
      ]
    }
  ],
  messageBody: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const MessageModel = mongoose.model("message", MessageSchema);

module.exports = { MessageModel };
