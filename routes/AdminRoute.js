const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.getAdminPage);
// router.post("/", AdminController.addAdminItem);
// router.put("/update/:id", AdminController.updateAdminItem);
// router.post("/delete/:id", AdminController.deleteAdminItem);

module.exports = router;