const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const crypto = require("crypto");
const res = require('express/lib/response');
const bcryptjs = require('bcryptjs');

let users
let usersPath
if(fs.existsSync(path.join(__dirname, "../database/users.json")) === false){
    users = []
    fs.writeFileSync(path.join(__dirname, "../database/users.json"),"[]")
}
usersPath = path.join(__dirname, "../database/users.json");
users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

// const usersPath = path.join(__dirname, "../database/users.json");
// const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

const userLoginPath = path.join(__dirname, "../database/userLogin.json");
const usersLogin = JSON.parse(fs.readFileSync(userLoginPath, 'utf-8'))



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
            id: users.length === 0 ? 1 : users[users.length-1].id+1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
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
        
        const userLogged = users.find( user => user.email === email)
        if(userLogged) {

            if(bcrypt.compareSync(password, userLogged.password)){                
                // delete userLogged.password
                req.session.userLogged = userLogged
                if(req.body.remember){
                    const token = crypto.randomBytes(64).toString("base64");
                    userLogged.token = token
                    
                    let userLogin = [...usersLogin, userLogged]
                    fs.writeFileSync(userLoginPath, JSON.stringify(userLogin, null,""));

                    res.cookie("rememberToken", {maxAge: 1000*60*60*24*120});
                }
                return res.redirect("/perfil")              
            }else{
                return res.render ("users/login",{
                    old: req.body,
                    errors:{
                        password: "La Contraseña es inválida"
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
            country: req.body.country,
            id_type: req.body.id_type,
            id_doc: req.body.id_doc,
            gender: req.body.gender,
            date: req.body.date,
            phonenumber: req.body.phonenumber,
            userAvatar: userToEdit.userAvatar
        }
        let userUpdated = users.map(user => {
            if (user.id == userToEdit.id) {
                return user = {...userToEdit};
            }
            return user
        })
        fs.writeFileSync(usersPath, JSON.stringify(userUpdated, null, " "));

        res.render("users/edit",{userToEdit:userToEdit})
    },
    delete: (req,res) => {
        let idUser = req.params.id
        let userToEdit = users.filter(user => user.id != idUser)         
        fs.writeFileSync(usersPath, JSON.stringify(userToEdit, null, " "));

        res.redirect ("/")
    },
    profile: (req,res) => {
        res.render("users/userProfile",{
            userLogged: req.session.userLogged
        })
    },
    logout: (req,res) => {
        res.clearCookie("recordarToken")
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = userController