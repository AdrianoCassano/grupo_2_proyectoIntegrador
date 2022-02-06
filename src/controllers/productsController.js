const productsController = {
    detalle: (req,res) => {
        res.render("products/detalle")
    },
    creacion: (req,res) => {
        res.render("products/creacion")
    },
    edicion: (req,res) => {
        res.render("products/edicion")
    }
}

module.exports = productsController