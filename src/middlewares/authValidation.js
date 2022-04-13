function authValidation (req,res,next){
    if(req.session.userLogged){
        next()
    } else{
        return res.redirect("/register")
    }
}

module.exports = authValidation