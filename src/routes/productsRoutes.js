const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.detalle);
router.get("/", productsController.creacion);
router.get("/", productsController.edicion);

module.exports = router