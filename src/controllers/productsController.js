const productsController = {
    detalle: (req,res) => {
        res.render("detalle")
    },
    creacion: (req,res) => {
        res.render("creacion")
    },
    edicion: (req,res) => {
        res.render("edicion")
    }
}

module.exports = productsController