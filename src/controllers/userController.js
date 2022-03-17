const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")

const usersPath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
// const products = (products.json == "") ? [] :JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    register: (req,res) => {
        res.render("users/register")
    },
    registrado: (req,res) => {
        let usuarioRegistrado = {
            id: users[users.length-1].id+1,
            userAvatar: req.body.userAvatar,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password:bcrypt.hashSync(req.body.password, 10),
            passwordconf: req.body.passwordconf,
            country: req.body.country,
            id_type: req.body.id_type,
            id_doc: req.file.id_doc,
            gender: req.body.gender,
            date: req.body.date,
            phonenumber: req.file.phonenumber,
        }
        users.push (usuarioRegistrado);
        usersJSON = JSON.stringify(users)
        fs.writeFileSync(usersPath,usersJSON)

        res.redirect("/register")
        // res.send("Usuario creado")
        },
    login: (req,res) => {
        res.render("users/login")
    },
    authenticate: (req,res) => {
        const {email, password} = req.body

        const userLogged = users.find( user => user.email == email)
        if(userLogged) {
            if(bcrypt.compareSync(password, userLogged.password)){                
                delete userLogged.password

                req.session.userLogged = userLogged

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