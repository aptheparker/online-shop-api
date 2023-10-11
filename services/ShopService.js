const fs = require("fs");
const path = require("path");

const dataFilePath = path.join("data", "products.json");

const getShopList = (req, res, next) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.redirect("/");
    } else {
      const products = JSON.parse(data);
      return res.render("shop/shop", {
        pageTitle: "Shop List",
        path: "shop",
        products: products,
      });
    }
  });
};

const getShopItem = (req, res, next) => {
  return;
};

module.exports = {
  getShopList,
  getShopItem,
};
