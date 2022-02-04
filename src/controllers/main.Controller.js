const mainController = {
    home: (req,res) => {
        res.render("home")
    },
    detalle: (req,res) => {
        res.render("detalle")
    },
    creacion: (req,res) => {
        res.render("creacion")
    },
    edicion: (req,res) => {
        res.render("edicion")
    },
    carrito: (req,res) => {
        res.render("carrito")
    },
    register: (req,res) => {
        res.render("users/register")
    },
    login: (req,res) => {
        res.render("users/login")
    }

}

module.exports = mainController