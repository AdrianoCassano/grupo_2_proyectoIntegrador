const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const crypto = require("crypto");
const usersPath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
// const products = (products.json == "") ? [] :JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const userFilePath = path.join(__dirname, "../database/userLogin.json");
const userLoginPath = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    register: (req,res) => {
        res.render("users/register")
    },
    registered: (req,res) => {
        let userAvatar 
        if(req.file != undefined){
            userAvatar = req.file.filename
        } else {
            userAvatar = "default-userAvatar.png"
        }
        let usuarioRegistrado = {
            id: users[users.length-1].id+1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            passwordconf: req.body.passwordconf,
            country: req.body.country,
            id_type: req.body.id_type,
            id_doc: req.body.id_doc,
            gender: req.body.gender,
            date: req.body.date,
            phonenumber: req.body.phonenumber,
            userAvatar
        }
        users.push (usuarioRegistrado);
        usersJSON = JSON.stringify(users)
        fs.writeFileSync(usersPath,usersJSON)

        res.redirect("/register")
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
                if(req.body.remember){
                    const token = crypto.randomBytes(64).toString("base64");
                    user.token=token
                    
                    const userLogin = [...userLogin, userLogged]
                    fs.writeFileSync(userLoginPath, JSON.stringify(userLogin,null,""));

                    res.cookie ("recordarToken", {maxAge: 1000*60*60*24*120});
                }
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
    },
    edit: (req,res) => {
        let idUser = req.params.id
        let userToEdit = users.find(user => user.id == idUser)
        
        res.render("users/edit",{userToEdit:userToEdit}) 
    
    },
    updated: (req,res) => {
        let idUser = req.params.id
        let userToEdit = users.find(user => user.id == idUser)
        

        userToEdit = {
            id: userToEdit.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            passwordconf: req.body.passwordconf,
            country: req.body.country,
            id_type: req.body.id_type,
            id_doc: req.file.id_doc,
            gender: req.body.gender,
            date: req.body.date,
            phonenumber: req.file.phonenumber,
            userAvatar: userToEdit.userAvatar
        }
        let userUpdated = users.map(user => {
            if (user.id == userToEdit.id) {
                return user = {...userToEdit};
            }
            return user
        })
        fs.writeFileSync(usersPath, JSON.stringify(userUpdated, null, " "));

        res.redirect("users/edit",{userToEdit:userToEdit})
    },
    delete: (req,res) => {
        let idUser = req.params.id
        let userToEdit = users.find(product => user.id != idUser)         
        fs.writeFileSync(usersPath, JSON.stringify(userToEdit, null, " "));

        res.redirect ("/users")
    }    
}

module.exports = userController