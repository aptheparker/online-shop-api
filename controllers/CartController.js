const express = require("express");
const router = express.Router();

const CartService = require("../services/CartService");

router.get("/", CartService.getCartPage);
router.get("/:id", CartService.getCartItem);
router.post("/", CartService.addCartItem);
router.delete("/:id", CartService.deleteCartItem);
router.put("/:id", CartService.updateCartItem);

module.exports = router;