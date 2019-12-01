const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");

// Users Testing Route
router.get("/", (req, res, next) => {
  res.json({
    status: 200,
    message: "Working"
  });
});

// Users Listing ALL
router.get("/all", (req, res, next) => {
  UserModel.find()
    .then(users => {
      res.json(users);
    })
    .catch(e => {
      console.log("User / Errors:", e);
    });
});

// Users Adding new User
router.post("/register", (req, res, next) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    userImage: req.body.userImage
  };
  const newUser = new UserModel(userData);

  newUser
    .save()
    .then(userResult => {
      res.json(userResult);
    })
    .catch(e => {
      console.log("Error New Users", e);
    });
});

//delete User

router.delete("/delete", (req, res, next) => {
  const delUser = req.body.id;
  UserModel.findByIdAndDelete(delUser)
    .then(returnData => {
      res.json(returnData);
    })
    .catch(e => {
      console.log("Delete Error: ", e);
    });
});

//update User
// router.post("update", (req, res, next) => {
//   const updateUser = {

//   }
// })

module.exports = router;
