const fs = require("fs");
const path = require("path");

const dataFilePath = path.join("data", "records.json");

const getShopList = (req, res, next) => {
  return  res.render("shop/shop", {
    pageTitle: "Shop List",
    path: "shop",
  });
};

const getShopItem = (req, res, next) => {
  return
}

module.exports = {
  getShopList,
  getShopItem
};
