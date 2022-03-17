const userController = {
    register: (req,res) => {
        res.render("users/register")
    },
    login: (req,res) => {
        res.render("users/login")
    },
    authenticate: (req,res) => {
        const {email, password} = req.body

        const user = users.find( user => user.email == email)
        if(user) {
            if(bcrypt.compareSync(password, user.password)){
                delete user.password

                req.session.user = user

                return res.redirect("/")
                
            }else{
                return res.render ("users/login",{
                    old: req.body,
                    errors:{
                        pass: "La Contraseña es inválida"
                    }
                });                
            }
        }else{
            return res.render ("users/login",{
                old: req.body,
                errors:{
                    email: "El email es inválido"
                }
            });
        }
    }
}

module.exports = userController