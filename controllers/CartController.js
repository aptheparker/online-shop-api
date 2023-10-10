const express = require("express");
const router = express.Router();

const CartService = require("../services/CartService");

router.get("/cart", CartService.getCartList);
router.get("/cart/:id", CartService.getCartItem);
router.post("/cart", CartService.addCartItem);
router.delete("/cart/:id", CartService.deleteCartItem);
router.put("/cart/:id", CartService.updateCartItem);

module.exports = router;