const express = require("express");
const router = express.Router();

const ShopService = require("../services/ShopService");

router.get("/", ShopService.getShopList);
router.get("/:id", ShopService.getShopItem);

module.exports = router;