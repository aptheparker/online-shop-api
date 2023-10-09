const fs = require("fs");
const path = require("path");

const dataFilePath = path.join("data", "records.json");

const getStatsFromFile = (req, res, next) => {
  return  res.render("statistics/statistics", {
    pageTitle: "Statistics",
    path: "/statistics/statistics",
  });
};

module.exports = {
  getStatsFromFile
};
