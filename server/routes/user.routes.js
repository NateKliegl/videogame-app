const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { login, signup } = require("../models/user.models");

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.send({
    success: true,
    error: null,
    data: "Signed Out",
  });
});

router.get("/verify", auth, (req, res) => {
  return res.send({
    success: true,
    error: null,
    data: { username: req.user.username },
  });
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return res.send({
      success: false,
      error: "Invalid information",
      data: null,
    });
  }
  signup(res, username, password);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return res.send({
      success: false,
      error: "Invalid information",
      data: null,
    });
  }
  login(res, username, password);
});

function validate(username, password) {
  return (
    !username ||
    !password ||
    username.length < 4 ||
    username.length > 20 ||
    password.length < 8 ||
    password.length > 20
  );
}

module.exports = router;
