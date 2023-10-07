const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("statistics/statistics", {
    pageTitle: "Statistics",
    path: "/statistics/statistics",
  });
});

module.exports = router;
