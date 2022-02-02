const express = require ("express")

const app = express()

app.use ( express.static("public"))

app.listen (3030, () =>{
    console.log("server up")
})
app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/detalleDeProducto", (req,res) => {
    res.sendFile(__dirname + "/views/products/detalleDeProducto.html")
})

app.get("/carritoDeCompras", (req,res) => {
    res.sendFile(__dirname + "/views/carritoDeCompras.html")
})

app.get("/formularioDeRegistro", (req,res) => {
    res.sendFile(__dirname + "/views/users/formularioDeRegistro.html")
})

app.get("/formularioDeLogin", (req,res) => {
    res.sendFile(__dirname + "/views/users/formularioDeLogin.html")
})


app.get("/creacion", (req,res) => {
    res.sendFile(__dirname + "/views/products/creacion.html")
})

app.get("/edicion", (req,res) => {
    res.sendFile(__dirname + "/views/products/edicion.html")
})