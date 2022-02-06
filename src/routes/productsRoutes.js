const express = require ("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/detalle", productsController.detalle);
router.get("/creacion", productsController.creacion);
router.get("/edicion", productsController.edicion);

module.exports = router