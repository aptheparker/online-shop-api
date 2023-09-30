const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("user/records", {
    pageTitle: "User Records",
    path: "/user/records",
  });
});

module.exports = router;
