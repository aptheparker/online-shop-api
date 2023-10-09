const express = require('express');
const router = express.Router();

const adminService = require('../services/AdminService');

router.get("/records", adminService.getRecordsFromFile);
router.post("/add-record", adminService.postRecordsToFile);

module.exports = router;  