function editValidation (req,res,next){
    if(req.params.id == req.session.userLogged.id){
        next()
    } else{
        return res.redirect(`/edicion/${req.session.userLogged.id}`)
    }
}

module.exports = editValidation