const path = require("path");

const mainController = {
    home: (req,res) => {
        res.sendFile(path.resolve("src/views/home.html"))
    },
    detalle: (req,res) => {
        res.sendFile(path.resolve("src/views/products/detalle.html"))
    },
    creacion: (req,res) => {
        res.sendFile(path.resolve("src/views/products/creacion.html"))
    },
    edicion: (req,res) => {
        res.sendFile(path.resolve("src/views/products/edicion.html"))
    },
    carrito: (req,res) => {
        res.sendFile(path.resolve("src/views/carrito.html"))
    },
    register: (req,res) => {
        res.sendFile(path.resolve("src/views/users/register.html"))
    },
    login: (req,res) => {
        res.sendFile(path.resolve("src/views/users/login.html"))
    },














}

module.exports = mainController