const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const crypto = require("crypto");
const res = require('express/lib/response');
const db = require ("../database/models")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    register: (req,res) => {
        res.render("users/register")
    },
    registered: (req,res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.render("users/register",{errors: errors.mapped(), old: req.body})
        }
        
        let userCheck = db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        if (userCheck == undefined || userCheck == null) {
            let userAvatar 
            if(req.file != undefined){
                userAvatar = req.file.filename
            } else {
                userAvatar = "default-userAvatar.png"
            }
            db.User.create({
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                userAvatar
            })
            return res.redirect("/register")
        } else {
            return res.render("users/register",{errors: { email: "El email ya existe" }, old: req.body})
        }
    },
    login: (req,res) => {
        res.render("users/login")
    },
    authenticate: (req,res) => {
        const {email, password} = req.body
        
        const userLogged = db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(userLogged) {

            if(bcrypt.compareSync(password, userLogged.password)){                
                // delete userLogged.password
                req.session.userLogged = userLogged
                if(req.body.remember){
                    const userLoginPath = path.join(__dirname, "../olddatabase/userLogin.json");
                    const usersLogin = JSON.parse(fs.readFileSync(userLoginPath, 'utf-8'))
                    const token = crypto.randomBytes(64).toString("base64");
                    userLogged.token = token
                    
                    let userLogin = [...usersLogin, userLogged]
                    fs.writeFileSync(userLoginPath, JSON.stringify(userLogin, null,""));

                    res.cookie("rememberToken", {maxAge: 1000*60*60*24*120});
                    // res.cookie("rememberToken", req.body.email, { maxAge: 1000*60*60*24*120 })                   
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
        db.User.findByPk(req.params.id, {
            include: [{association:"products"}]
        })
        .then(userToEdit => {
            res.render("users/edit", {userToEdit})
        }).catch((error)=>{
            console.log(error)
        })
    },
    updated: (req,res) => {
        db.User.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        }).catch((error)=>{
            console.log(error)
        })
        res.redirect("userProfile")
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