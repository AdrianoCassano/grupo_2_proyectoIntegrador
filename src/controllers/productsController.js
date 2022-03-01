const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))
// const products = (products.json == "") ? [] :JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

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
        let productoCreado = {
            id: products[products.length-1].id+1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            materiales: req.body.materiales,
            cantidad:req.body.cantidad,
            precio: req.body.precio,
            dimensiones: req.body.dimensiones,
            peso: req.body.peso,
            imagen: req.file.filename,
        }
        products.push (productoCreado);
        productsJSON = JSON.stringify(products)
        fs.writeFileSync(productsPath,productsJSON)

        res.redirect("/products")
    },
    edicion: (req,res) => {
        res.render("products/edicion")
    },
    editado: (req,res) => {
        res.render("products/edicion")
    },
    delete: (req,res) => {
        res.send ("products/delete")
    }
}

module.exports = productsController