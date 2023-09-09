const express = require('express');
const router = express.Router();

router.get("/records", (req, res) => {
  res.render("admin/records");
});

router.get("/add-record", (req, res) => {
  res.render("admin/add-record");
})

module.exports = router;