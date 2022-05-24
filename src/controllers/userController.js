const fs = require('fs');
const path = require('path');
const bcryptjs = require("bcryptjs")
const {validationResult} = require("express-validator")
const crypto = require("crypto");
const res = require('express/lib/response');
const db = require ("../database/models");
const { Console } = require('console');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    register: (req,res) => {
        res.render("users/register")
    },
    registered: async function (req,res){
        try {
            let errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.render("users/register",{errors: errors.mapped(), old: req.body})
            }
            
            let userCheck = await db.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            if (userCheck == undefined || userCheck == null) {
                let userAvatar 
                if(req.file != undefined){
                    userAvatar = req.file.filename
                } else {
                    userAvatar = `default-userAvatar${Math.floor(Math.random() * 6) + 1}.png`
                }
                await db.User.create({
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    userAvatar,
                    categoryId: 2
                })
                return res.redirect("/registrarse")
            } else {
                return res.render("users/register",{errors: { email: "El email ya existe" }, old: req.body})
            }           
        } catch (error) {
            console.log(error)
        }
    },
    login: (req,res) => {
        res.render("users/login")
    },
    authenticate: async (req,res) => {
        try {
            const {email, password} = req.body
            
            let userLogged = await db.User.findOne({
                where:{
                    email: email
                }
            })

            if(userLogged) {
                if(bcryptjs.compareSync(password, userLogged.password)){                
                    delete userLogged.dataValues.password
                    req.session.userLogged = userLogged
                    console.log(userLogged)
                    
                    if(req.body.remember){
                        const token = crypto.randomBytes(64).toString("base64");
                        userLogged.token = token
                        
                        let usersLogin = {
                            token: userLogged.token,
                            userId: userLogged.id
                          };
                          await db.UserLog.create(usersLogin)
    
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
        } catch (error) {
            console.log(error)
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
    updated: async (req,res) => {
        console.log("hola")
        try {
            await db.User.update({
                ...req.body
            }, {
                where: {
                    id: req.params.id
                }
            })
            let userLogged = await db.User.findOne({
                where:{
                    id: req.params.id
                }
            })
            delete userLogged.dataValues.password
            req.session.userLogged = userLogged
            res.redirect("/perfil")
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req,res) => {
        try {
            await db.UserLog.destroy({
                where:{
                    userId: req.params.id
                }
            }),
            await db.User.destroy({
                where:{
                    id: req.params.id
                },
            })
            res.redirect ("/")
        } catch (error) {
            console.log(error)
        }
    },
    profile: (req,res) => {
        res.render("users/userProfile")
    },
    logout: (req,res) => {
        res.clearCookie("recordarToken")
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = userController