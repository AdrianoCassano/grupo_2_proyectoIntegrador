const express = require ("express")
const app = express()

app.use ( express.static("public"));
// app.set ("view engina", "ejs");
app.listen (3030, () =>{console.log("server up")})
const mainRoutes = require("./routes/mainRoutes.js");



app.use("/", mainRoutes);
app.use("/detalle", mainRoutes);
app.use("/creacion", mainRoutes);
app.use("/edicion", mainRoutes);
app.use("/carrito", mainRoutes);
app.use("/register", mainRoutes);
app.use("/login", mainRoutes);





