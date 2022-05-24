const db = require ("../database/models")

const mainController = {
    home: (req,res) => {
        let products = db.Product.findAll({include: [{association:"categorias"}]})
        let categorias = db.Categoria.findAll()
        Promise.all([products, categorias])
        .then(function([products, categorias]){
            return res.render("home",{products:products, categorias:categorias})
        }).catch((error)=>{
            console.log(error)
        })
    },
    aboutUs: (req,res) => {
        res.render("aboutUs")
    }
}

module.exports = mainController