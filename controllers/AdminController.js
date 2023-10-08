const express = require('express');
const router = express.Router();

router.get("/records", (req, res) => {
  res.render("admin/records", {
    pageTitle: "Admin Records",
    path: "/admin/records"
  });
});

router.post("/add-record", (req, res) => {
  res.render("admin/add-record", {
    pageTitle: "Add Admin Records",
    path: "/admin/add-record"
  });
})

module.exports = router;  