function guestValidation (req,res,next){
    if(req.session.userLogged === undefined){
        next()
    } else{
        return res.redirect("/perfil")
    }
}

module.exports = guestValidation