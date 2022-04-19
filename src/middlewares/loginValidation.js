const path = require("path")
const fs = require("fs")
const db = require ("../database/models")


const userLoginPath = path.join(__dirname, "../olddatabase/userLogin.json");
const usersLogin = JSON.parse(fs.readFileSync(userLoginPath, 'utf-8'))

module.exports = (req,res,next) => {
    res.locals.userLogged = false

    if(req.session && req.session.userLogged) {
        res.locals.userLogged = req.session.userLogged
        return next()
    } else if(req.cookies && req.cookies.rememberToken){

        const userToken = usersLogin.find( user => user.token = req.cookies.rememberToken)

        if(userToken){
            let userLogged = users.find (user => user.id === userToken.id)

            if(userLogged){
                delete userLogged.password

                req.session.userLogged = userLogged
                req.locals.userLogged = userLogged
            }
        }
    }

    next()
}

// function logintValidation (req,res,next){
//     res.locals.isLogged = false

//     if(req.session && req.session.userLogged){
//         res.locals.isLogged = true
//         res.locals.userLogged = req.session.userLogged
//     }
//     next()
// }
// module.exports = logintValidation