function editValidation (req,res,next){
    if(req.params.id == req.session.userLogged.id || req.session.userLogged.categoryId === 1){
        next()
    } else{
        return res.redirect(`/edicion/${req.session.userLogged.id}`)
    }
}

module.exports = editValidation