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
        let productoCreado = {
            // id: hay que definir como hacemos,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            materiales: req.body.materiales,
            precio: req.body.precio,
            // dimensiones: req.body.dimensiones,
            // peso: req.body.peso,
            imagen: req.file.filename,
        }
        // products.push (productoCreado);

        res.redirect("/products")
    },
    edicion: (req,res) => {
        let idProducto = req.params.id

        /* res.render("products/edicion") */
        res.send(idProducto)
    },
    editado: (req,res) => {
        let productoEditado = {
            // id: hay que definir como hacemos,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            // materiales: req.body.materiales,
            precio: req.body.precio,
            // dimensiones: req.body.dimensiones,
            // peso: req.body.peso,
            //imagen: req.file.imagen,
        }
        res.redirect("products/edicion")
    },
    destroy: (req,res) => {
        res.render("products/edicion")
    }
}

module.exports = productsController