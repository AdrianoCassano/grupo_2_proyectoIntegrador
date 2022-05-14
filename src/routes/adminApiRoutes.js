const express = require ("express");
const router = express.Router();
const adminApiController = require("../controllers/adminApiController");

router.get("/panel", adminApiController.panel);

router.get("/usuarios", adminApiController.users);
router.get("/usuarios/:id", adminApiController.userDetail);

router.get("/productos", adminApiController.products);
router.get("/productos/:id", adminApiController.productDetail);

module.exports = router

