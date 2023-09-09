const express = require('express');
const router = express.Router();

router.get("/statistics", (req, res) => {
  res.render("statistics/statistics");
});

module.exports = router;