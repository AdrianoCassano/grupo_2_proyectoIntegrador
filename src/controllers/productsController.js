const fs = require('fs');
const path = require('path');
const db = require ("../database/models")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    products: (req,res) => {
        db.Product.findAll()
        .then(products => {
            res.render("products", {products})
        }).catch((error)=>{
            console.log(error)
        })
    },
    detalle: (req,res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association:"categorias"},{association:"users"}]
        })
        .then(product => {
            res.render("detail", {product})
        }).catch((error)=>{
            console.log(error)
        })
    },
    creacion: (req,res) => {
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render("create",{categorias:categorias})
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
        }).catch((error)=>{
            console.log(error)
        })
        res.redirect("/products")
    },
    edit: (req,res) => {
        db.Product.findByPk(req.param.id)
            .then(function(product){
                res.render("products/edit",{product:product}) 
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
        }).catch((error)=>{
            console.log(error)
        })
        res.redirect("products/edit"+ req.param.id)
    },
    delete: (req,res) => {
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        }).catch((error)=>{
            console.log(error)
        })
        res.redirect ("/products")
    }
}

module.exports = productsController