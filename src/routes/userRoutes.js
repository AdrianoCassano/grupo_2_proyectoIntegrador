const express = require ("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.register);
router.get("/", userController.login);

module.exports = router