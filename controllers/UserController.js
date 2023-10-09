const express = require("express");
const router = express.Router();

const UserService = require("../services/UserService");

router.get("/", UserService.getRecordsFromFile);

module.exports = router;