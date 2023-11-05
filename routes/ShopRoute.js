const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/ShopController");

router.get("/", ShopController.getShopPage);
router.get("/:id", ShopController.getShopItem);

module.exports = router;
