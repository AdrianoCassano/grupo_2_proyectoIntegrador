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
        let productImg 
        if(req.file != undefined){
            productImg = req.file.filename
        } else {
              productImg = "default-productImg.png"
        }

        let productoCreado = {
            id: products[products.length-1].id+1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            materiales: req.body.materiales,
            cantidad:req.body.cantidad,
            precio: req.body.precio,
            dimensiones: req.body.dimensiones,
            peso: req.body.peso,
            productImg
        }
        products.push (productoCreado);
        productsJSON = JSON.stringify(products)
        fs.writeFileSync(productsPath,productsJSON)

        res.redirect("/products")
    },
    edicion: (req,res) => {
        let idProducto = req.params.id
        let productoEditar = products.find(product => product.id == idProducto)
        
       res.render("products/edicion",{productoEditar:productoEditar}) 
    
    },
    editado: (req,res) => {
        let idProducto = req.params.id
        let productoEditar = products.find(product => product.id == idProducto) 
        
        productoEditar = {
            id: productoEditar.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            materiales: req.body.materiales,
            cantidad:req.body.cantidad,
            precio: req.body.precio,
            dimensiones: req.body.dimensiones,
            peso: req.body.peso,
            productImg: productoEditar.productImg
        }
        let productoEditado = products.map(product => {
            if (product.id == productoEditar.id) {
                return product = {...productoEditar};
            }
            return product
        })
        fs.writeFileSync(productsPath, JSON.stringify(productoEditado, null, " "));

        res.redirect("products/edicion",{productoEditar:productoEditar})
    },
    delete: (req,res) => {
        let idProducto = req.params.id
        let productoEditar = products.find(product => product.id != idProducto)         
        fs.writeFileSync(productsPath, JSON.stringify(productoEditar, null, " "));

        res.redirect ("/products")
    }
}

module.exports = productsController