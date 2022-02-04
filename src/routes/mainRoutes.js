const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/main.Controller");

router.get("/", mainController.home);
router.get("/detalle", mainController.detalle);
router.get("/creacion", mainController.creacion);
router.get("/edicion", mainController.edicion);
router.get("/carrito", mainController.carrito);
router.get("/register", mainController.register);
router.get("/login", mainController.login);
module.exports = router