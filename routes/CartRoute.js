const express = require("express");
const router = express.Router();

const CartController = require("../controllers/CartController");

router.get("/", CartController.getCartPage);
router.post("/", CartController.addCartItem);

module.exports = router;