const express = require("express");
const router = express.Router();
const FeedModel = require("../models/FeedModel");

//Testing Route
router.get("/", (req, res, next) => {
  res.json({
    status: 200,
    message: "Working Feed router"
  });
});

//Listing All Feeds

router.get("/all", (req, res, next) => {
  FeedModel.find()
    .then(feedResults => {
      res.json(feedResults);
    })
    .catch(e => {
      console.log("Errors in Feed Listing", e);
    });
});

//Add New Feed

router.post("/add", (req, res, next) => {
  const feedData = {
    email: req.body.email,
    desc: req.body.desc,
    comment: req.body.comment,
    tags: req.body.tags,
    feedImage: req.body.feedImage,
    likes: req.body.likes,
    shares: req.body.shares
  };
  const newFeed = new FeedModel(feedData);

  newFeed
    .save()
    .then(feedResults => {
      res.json(feedResults);
    })
    .catch(e => {
      console.log("Error in adding Feed", e);
    });
});

//Delete Feed

router.delete("/delete", (req, res, next) => {
  const feedID = req.body.id;
  FeedModel.findByIdAndDelete(feedID)
    .then(delResult => {
      res.json(delResult);
    })
    .catch(e => {
      console.log("Error in Feed:", e);
    });
});

module.exports = router;
