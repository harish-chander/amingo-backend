const express = require("express");
const router = express.Router();
const RoleModel = require("../models/RoleModel");

//Roles Working route
router.get("/", (req, res, next) => {
  res.json({
    status: 200,
    message: "Working Roles"
  });
});

//Roles List
router.get("/all", (req, res, next) => {
  RoleModel.find()
    .then(roleResult => {
      res.json(roleResult);
    })
    .catch(e => {
      console.log("Errors of Roles: ", e);
    });
});

//Add new role

router.post("/add", (req, res, next) => {
  const rolesData = {
    roleID: req.body.id,
    roleName: req.body.roleName
  };
  const newRole = new RoleModel(rolesData);

  newRole
    .save()
    .then(roleResults => {
      res.json(roleResults);
    })
    .catch(e => {
      console.log("Errors in Add", e);
    });
});

//Delete Role

router.delete("/delete", (req, res, next) => {
  const roleId = req.body.id;

  RoleModel.findByIdAndDelete(roleId)
    .then(delResult => {
      res.json(delResult);
    })
    .catch(e => {
      console.log("Error in delete Role:  ", e);
    });
});

module.exports = router;
