const express = require ("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const loginValidation = require("./middlewares/loginValidation")
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const userRoutes = require("./routes/userRoutes");

const adminApiRoutes = require("./routes/adminApiRoutes")
const methodOverride = require("method-override");

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret:"selbum odot",
    resave: false,
    saveUninitialized:true,
}));
app.use(loginValidation)
app.use(cookieParser());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", mainRoutes);
app.use("/productos", productsRoutes);
app.use("/carrito", checkoutRoutes);
app.use("/", userRoutes);
app.use("/", userRoutes);
 
app.use("/admin", adminApiRoutes); 

app.use((req,res,next) => {
    res.status(404).render("not-found")
}); 

app.listen (3030, () =>{console.log("server up")});
