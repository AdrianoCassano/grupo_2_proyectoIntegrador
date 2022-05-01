const fs = require('fs');
const path = require('path');
const db = require ("../database/models")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = { 
    products: (req,res) => {
        db.Product.findAll()
        .then(products => {
            res.render("products/products", {products})
        }).catch((error)=>{
            console.log(error)
        })
    },
    detalle: (req,res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association:"categorias"},{association:"users"}]
        })
        .then(product => {
            res.render("products/detail", {product})
        }).catch((error)=>{
            console.log(error)
        })
    },
    creacion: (req,res) => {
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render("products/create",{categorias:categorias})
        }).catch((error)=>{
            console.log(error)
        })
    },
    creado: (req,res) => {
        let productImg 
        if(req.file != undefined){
            productImg = req.file.filename
        } else {
              productImg = "default-productImg.png"
        }
        db.Product.create({
            ...req.body,
            productImg
        })
        .then(()=>{
            res.redirect("/products")
        }).catch((error)=>{
            console.log(error)
        })
    },
    edit: (req,res) => {
        db.Product.findByPk(req.params.id)
            .then(function(Product){
                res.render("products/edit",{Product:Product}) 
            }).catch((error)=>{
                console.log(error)
            })      
    },
    update: (req,res) => {
        db.Product.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {          
            res.redirect("/products/edicion/"+ req.params.id)
        }).catch((error)=>{
            console.log(error)
        })
    },
    delete: (req,res) => {
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect ("/products")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

module.exports = productsController