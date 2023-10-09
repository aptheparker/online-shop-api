const express = require("express");
const router = express.Router();

const StatisticsService = require("../services/StatisticsService");

router.get("/", StatisticsService.getStatsFromFile);

module.exports = router;
