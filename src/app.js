const express = require ("express")
const app = express()
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");

app.use (express.static("public"));

app.set ("views", [path.join(__dirname, "views"),path.join(__dirname, "/views/products")]);

app.set ("view engine", "ejs");


app.use("/", mainRoutes);
app.use("/detalle", mainRoutes);
app.use("/creacion", mainRoutes);
app.use("/edicion", mainRoutes);
app.use("/carrito", mainRoutes);
app.use("/register", mainRoutes);
app.use("/login", mainRoutes);


app.listen (3030, () =>{console.log("server up")});



