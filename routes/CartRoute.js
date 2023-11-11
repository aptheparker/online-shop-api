const express = require("express");
const router = express.Router();

const CartController = require("../controllers/CartController");

router.get("/", CartController.getCartPage);
router.post("/", CartController.addCartItem);
router.put("/update/:id", CartController.updateCartItem);
router.post("/delete/:id", CartController.deleteCartItem);

module.exports = router;