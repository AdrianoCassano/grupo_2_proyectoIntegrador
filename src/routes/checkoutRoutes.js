const express = require ("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController");

router.get("/", checkoutController.carrito);

module.exports = router