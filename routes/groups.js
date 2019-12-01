const express = require("express");
const router = express.Router();
const GroupModel = require("../models/GroupModel");
//Test Route
router.get("/", (req, res, next) => {
  res.json({
    status: 200,
    message: "Working Group Route"
  });
});

router.get("/all", (req, res, next) => {
  GroupModel.find()
    .then(groupList => {
      res.json(groupList);
    })
    .catch(e => {
      console.log("Error in Listing", e);
    });
});

router.post("/add", (req, res, next) => {
  const grpData = {
    groupName: req.body.groupName,
    groupMembers: req.body.groupMembers,
    groupAdmin: req.body.groupAdmin,
    groupDesc: req.body.groupDesc,
    groupImage: req.body.groupImage
  };
  const newGrp = new GroupModel(grpData);

  newGrp
    .save()
    .then(grpResult => {
      res.json(grpResult);
    })
    .catch(e => {
      console.log("Error in adding Group:  ", e);
    });
});

router.delete("/delete", (req, res, next) => {
  const delGrp = req.body.GroupModel.findOneAndDelete(delGrp)
    .then(delGrpResult => {
      res.json(delGrpResult);
    })
    .catch(e => {
      console.log("Error in Deleting Group: ", e);
    });
});

// router.post("/update/:type", (req, res, next) => {

// });

module.exports = router;
