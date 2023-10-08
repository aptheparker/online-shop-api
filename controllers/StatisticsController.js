const express = require("express");
const router = express.Router();

router.get("/statistics", (req, res) => {
  res.render("statistics/statistics", {
    pageTitle: "Statistics",
    path: "/statistics/statistics",
  });
});

module.exports = router;
