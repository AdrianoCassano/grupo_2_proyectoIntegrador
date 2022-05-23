function authValidation (req,res,next){
    if(req.session.userLogged){
        next()
    } else{
        return res.redirect("/registrarse")
    }
}

module.exports = authValidation