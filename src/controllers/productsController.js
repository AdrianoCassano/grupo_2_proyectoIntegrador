const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    products: (req,res) => {
        res.render("products/products")
    },
    detalle: (req,res) => {
        res.render("products/detalle")
    },
    creacion: (req,res) => {
        res.render("products/creacion")
    },
    creado: (req,res) => {
        res.render("products/creacion")
    },
    edicion: (req,res) => {
        res.render("products/edicion")
    },
    editado: (req,res) => {
        res.render("products/edicion")
    },
    destroy: (req,res) => {
        res.render("products/edicion")
    }
}

module.exports = productsController