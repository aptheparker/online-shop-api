const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.get("/sign-in", AuthController.getSignIn);
router.post("/sign-in", AuthController.postSignIn);
router.get("/sign-up", AuthController.getSignUp);
router.post("/sign-up", AuthController.postSignUp);

module.exports = router;
