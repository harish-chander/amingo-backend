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

const NotificationsModel = mongoose.model("notifications", NotificationSchema);

module.exports = { NotificationsModel };
