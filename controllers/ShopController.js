const express = require("express");
const router = express.Router();

const ShopService = require("../services/ShopService");

router.get("/shop", ShopService.getShopList);
router.get("/shop/:id", ShopService.getShopItem);

module.exports = router;
