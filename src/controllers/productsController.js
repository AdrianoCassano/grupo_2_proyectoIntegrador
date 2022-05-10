const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator")
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
    create: (req,res) => {
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render("products/create",{categorias:categorias})
        }).catch((error)=>{
            console.log(error)
        })
    },
    created: (req,res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            db.Categoria.findAll()
            .then(function(categorias){
                return res.render("products/create", {errors: errors.mapped(), categorias:categorias, old: req.body})
            }).catch((error)=>{
                console.log(error)
            })
        } else{
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
        }
    },
    edit: (req,res) => {
        let Product1 = db.Product.findByPk(req.params.id)
        let categorias1 = db.Categoria.findAll()
        Promise.all([Product1, categorias1])
        .then(function([Product, categorias]){
            return res.render("products/edit",{Product:Product, categorias:categorias}) 
        }).catch((error)=>{
            console.log(error)
        })      
    },
    update: (req,res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            let Product = db.Product.findByPk(req.params.id)
            let categorias = db.Categoria.findAll()
            Promise.all([Product, categorias])
            .then(function([Product, categorias]){
                return res.render("products/edit", {errors: errors.mapped(), Product:Product, categorias:categorias})
            }).catch((error)=>{
                console.log(error)
            })
        }else{
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
        }
    },
    delete: (req,res) => {
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/products")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

module.exports = productsController