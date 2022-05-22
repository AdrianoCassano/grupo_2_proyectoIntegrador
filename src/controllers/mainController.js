const db = require ("../database/models")

const mainController = {
    home: (req,res) => {
        db.Product.findAll()
        .then(products => {
        res.render("home", {products})
    }).catch((error)=>{
        console.log(error)
    })
    },
    aboutUs: (req,res) => {
        res.render("aboutUs")
    }
}

module.exports = mainController