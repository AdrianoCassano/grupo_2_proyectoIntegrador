function productsValidation (req,res,next){
    if(req.session.userLogged.categoryId === 1){
        next()
    } else{
        return res.redirect(`/home`)
    }
}

module.exports = productsValidation