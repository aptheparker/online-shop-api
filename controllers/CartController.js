const express = require("express");
const router = express.Router();

const CartService = require("../services/CartService");

router.get("/", CartService.getCartPage);
router.get("/:id", CartService.getCartItem);
router.post("/", CartService.addCartItem);
router.put("/:id", CartService.updateCartItem);
router.post("/delete/:id", CartService.deleteCartItem);

module.exports = router;