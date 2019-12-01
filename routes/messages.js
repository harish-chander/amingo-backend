const express = require("express");
const router = express.Router();
const MessageModel = require("../models/GroupModel");

router.get("/", (req, res, next) => {
  res.json({
    status: 200,
    message: "Working Message"
  });
});

router.get("/all", (req, res, next) => {
  MessageModel.find()
    .then(listMsg => {
      res.json(listMsg);
    })
    .catch(e => {
      console.log("Error is Listing Message: ", e);
    });
});
router.post("/add", (req, res, next) => {
  const messageData = {
    members: {
      from: req.body.fromId,
      to: req.body.toIds
    },
    messageBody: req.body.messageBody
  };
  const newMessage = new MessageModel(messageData);

  newMessage
    .save()
    .then(messageCreateResult => {
      res.json(messageCreateResult);
    })
    .catch(e => {
      console.log("Error in add message :", e);
    });
});

router.delete("/delete", (req, res, next) => {
  const delMessage = req.body.id;
  MessageModel.findByIdAndDelete(delMessage)
    .then(delResult => {
      res.json(delResult);
    })
    .catch(e => {
      console.log("Error in deleting message", e);
    });
});

module.exports = router;
