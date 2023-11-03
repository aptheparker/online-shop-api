const express = require("express");
const router = express.Router();

const AuthService = require("../services/AuthService");

router.post("/signup", AuthService.signup);
router.post("/signin", AuthService.signin);

module.exports = router;
