const express = require("express");
const router = express.Router();

const MainService = require("../services/MainService");

router.get("/", MainService.getMainPage);

module.exports = router;