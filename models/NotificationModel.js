const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  notificationMetaData: [
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
  notificationBody: {
    type: String,
    required: true
  }
});

const NotificationModel = mongoose.model("notification", NotificationSchema);

module.exports = { NotificationModel };
