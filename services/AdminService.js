const fs = require("fs");
const path = require("path");

const dataFilePath = path.join("data", "records.json");

const getRecordsFromFile = (req, res, next) => {
  return res.render("admin/records", {
    pageTitle: "Admin Records",
    path: "/admin/records",
  });
};

const postRecordsToFile = (req, res, next) => {
  return res.render("admin/add-record", {
    pageTitle: "Add Admin Records",
    path: "/admin/add-record",
  });
};

module.exports = {
  getRecordsFromFile,
  postRecordsToFile,
};
