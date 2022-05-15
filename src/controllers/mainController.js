const mainController = {
    home: (req,res) => {
        res.render("home")
    },
    aboutUs: (req,res) => {
        res.render("aboutUs")
    }
}

module.exports = mainController